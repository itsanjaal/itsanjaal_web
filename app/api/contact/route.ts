import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.verify();

    /* ============================
       1️⃣ MAIL TO YOU (ADMIN)
    ============================ */
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
      to: process.env.MAIL_FROM_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* ============================
       2️⃣ AUTO-REPLY TO USER
    ============================ */
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
      to: email,
      subject: "We’ve received your message – IT Sanjaal",
      html: `
        <p>Hi <strong>${name}</strong>,</p>

        <p>Thank you for reaching out to <strong>IT Sanjaal</strong>.</p>

        <p>We have successfully received your message and our team will get back
        to you within <strong>24 hours</strong>.</p>

        <hr />

        <p><strong>Your message:</strong></p>
        <blockquote>${message}</blockquote>

        <p>
          Regards,<br />
          <strong>IT Sanjaal Team</strong><br />
          📧 info@itsanjaal.com<br />
          📞 +977-9851444004
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
