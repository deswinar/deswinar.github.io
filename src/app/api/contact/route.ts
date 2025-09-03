// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "deswinauliyaarabbani@gmail.com",
      subject: `New contact from ${name}`,
      text: `${message}\n\nReply to: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
