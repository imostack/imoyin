import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

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
    const { name, email, subject, message, _trap } = await request.json();

    // Honeypot — bots fill this, humans never see it
    if (_trap) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Input exceeds allowed length.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Imoyin Sampson <contact@imoyinsampson.com>',
      to: 'hello@imoyinsampson.com',
      bcc: 'sampsonimoyin@gmail.com',
      replyTo: email,
      subject: `${subject} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send. Please try again.' },
      { status: 500 }
    );
  }
}
