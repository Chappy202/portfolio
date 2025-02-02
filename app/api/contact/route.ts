import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { captchaToken, name, email, message, contactReason, _gotcha } = body;

    // Check honeypot
    if (_gotcha) {
      return NextResponse.json({ success: true }); // Silently reject spam
    }

    // Verify the captcha token
    const verifyUrl = 'https://api.hcaptcha.com/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY!,
        response: captchaToken,
      }),
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json({ error: 'Invalid captcha' }, { status: 400 });
    }

    // Prepare email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: 'hello@oxibux.com',
      replyTo: email,
      subject: `New ${contactReason} Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Reason: ${contactReason}

        Message:
        ${message}
            `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Contact Reason:</strong> ${contactReason}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Log error to server logs
    // eslint-disable-next-line no-console
    console.error(error);

    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
