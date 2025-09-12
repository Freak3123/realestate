import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();




    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const res=await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // your destination email
      subject: `Contact Request from: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });


    console.log("Message sent: ", res.messageId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
