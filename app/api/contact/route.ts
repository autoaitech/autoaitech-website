import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, business, email, phone, challenge } = await req.json();

    await resend.emails.send({
      from: "AutoAITech Website <noreply@autoaitech.co>",
      to: "hello@autoaitech.co",
      subject: `New enquiry from ${name} — ${business}`,
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        ``,
        `Challenge:`,
        challenge,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
