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
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .content { background: white; padding: 20px; border-radius: 8px; border: 1px solid #eee; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .message { margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 6px; }
    .footer { margin-top: 20px; font-size: 0.9em; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;color:#333;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Contact Reason:</span>
        <span>${contactReason}</span>
      </div>
      <div class="field">
        <span class="label">Name:</span>
        <span>${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span>${email}</span>
      </div>
      <div class="message">
        <div class="label">Message:</div>
        <div style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This email was sent from the contact form on jjbadenhorst.me
    </div>
  </div>
</body>
</html>
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
