import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import {
  INITIAL_DISCOVERY_DATA,
  buildEmailBody,
  validateContactStep,
  validateBusinessStep,
  validateProjectTypeStep,
  validateGoalsStep,
  validateTimelineBudgetStep,
  MAX_FILES,
  MAX_FILE_BYTES,
  MAX_TOTAL_BYTES,
  formatBytes,
  type DiscoveryFormData,
} from '@/lib/project-discovery';

// Best-effort rate limiting per serverless instance
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

function firstError(data: DiscoveryFormData): string | null {
  const validators = [
    validateContactStep,
    validateBusinessStep,
    validateProjectTypeStep,
    validateGoalsStep,
    validateTimelineBudgetStep,
  ];
  for (const validate of validators) {
    const errors = validate(data);
    const message = Object.values(errors)[0];
    if (message) return message;
  }
  return null;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const form = await request.formData();
    const payloadRaw = form.get('payload');

    if (typeof payloadRaw !== 'string') {
      return NextResponse.json({ error: 'Missing submission data.' }, { status: 400 });
    }

    const parsed = JSON.parse(payloadRaw);
    const data: DiscoveryFormData = { ...INITIAL_DISCOVERY_DATA, ...parsed };

    // Honeypot — bots fill this, humans never see it
    if (data._trap) {
      return NextResponse.json({ success: true });
    }

    const validationError = firstError(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const fileEntries = form.getAll('files').filter((f): f is File => f instanceof File);

    if (fileEntries.length > MAX_FILES) {
      return NextResponse.json(
        { error: `You can attach up to ${MAX_FILES} files.` },
        { status: 400 }
      );
    }

    let totalBytes = 0;
    for (const file of fileEntries) {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { error: `${file.name} exceeds the ${formatBytes(MAX_FILE_BYTES)} per-file limit.` },
          { status: 400 }
        );
      }
      totalBytes += file.size;
    }
    if (totalBytes > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        { error: `Total attachments can't exceed ${formatBytes(MAX_TOTAL_BYTES)}.` },
        { status: 400 }
      );
    }

    const categoriesRaw = form.get('fileCategories');
    const categories: string[] =
      typeof categoriesRaw === 'string' ? JSON.parse(categoriesRaw) : [];

    const attachments = await Promise.all(
      fileEntries.map(async file => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const fileMeta = fileEntries.map((file, i) => ({
      name: file.name,
      category: categories[i] || 'Other',
      size: file.size,
    }));

    await resend.emails.send({
      from: 'Imoyin Sampson <contact@imoyinsampson.com>',
      to: 'hello@imoyinsampson.com',
      replyTo: data.email,
      subject: `Project Discovery — ${data.companyName?.trim() || data.fullName}`,
      text: buildEmailBody(data, fileMeta),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
