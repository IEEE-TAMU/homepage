import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with generic SMTP settings
    // These would typically be set as environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number.parseInt(process.env.SMTP_PORT!),
      secure: false, // true for 465, false for other ports
      // TODO: store and use the kumo certificate for starttls
      ignoreTLS: true, // INSECURE: this is only ok since the ieeetamu email relay runs on the same internal network
      // auth: {
      //   user: process.env.SMTP_USER || 'your-email@gmail.com',
      //   pass: process.env.SMTP_PASS || 'your-app-password',
      // },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'homepage@ieeetamu.org',
      to: 'contact@ieeetamu.org', // IEEE TAMU contact email
      subject: `IEEE TAMU Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the IEEE TAMU website contact form.</em></p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
