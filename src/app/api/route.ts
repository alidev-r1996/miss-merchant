import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const form = await req.json();
  const { name, phone, mail, representative } = form;

  const html = `
  <!DOCTYPE html>
  <html lang="fa" dir="rtl">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>درخواست مشاوره</title>
      <style>
          body { font-family: Arial, sans-serif; background-color: #f5f5f5; direction: rtl; text-align: right; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }
          .header { background-color: #007bff; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0; font-size: 20px; font-weight: bold; }
          .content { padding: 20px; font-size: 16px; color: #333; }
          .info { background: #f1f1f1; padding: 10px; border-radius: 5px; margin-bottom: 10px; }
          .footer { text-align: center; padding: 15px; font-size: 14px; color: #777; }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">درخواست مشاوره جدید</div>
          <div class="content">
              <p>یک درخواست مشاوره جدید دریافت شد:</p>
              <div class="info"><strong>نام متقاضی:</strong> ${name}</div>
              <div class="info"><strong>شماره تماس:</strong> ${phone}</div>
              <div class="info"><strong>ایمیل:</strong> ${mail}</div>
              <div class="info"><strong>معرف:</strong> ${representative}</div>
              <p>لطفاً در اسرع وقت با متقاضی تماس بگیرید.</p>
          </div>
          <div class="footer">تمامی حقوق محفوظ است.</div>
      </div>
  </body>
  </html>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY as string);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_USER as string,
      subject: "درخواست مشاوره ",
      html: html,
    });

    return NextResponse.json({ status: 200, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Email sending failed", error });
  }
}
