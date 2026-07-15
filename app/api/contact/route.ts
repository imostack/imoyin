import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await resend.emails.send({
      // Update 'from' to 'contact@imoyinsampson.com' once domain is verified in Resend
      from: 'Imoyin Sampson Website <onboarding@resend.dev>',
      to: 'hello@imoyinsampson.com',
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
