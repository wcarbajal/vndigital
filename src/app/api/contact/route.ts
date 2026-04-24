import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validación simple de email
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validaciones del lado servidor
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 400 });
    }
    if (nombre.length > 100 || asunto.length > 150 || mensaje.length > 1000) {
      return NextResponse.json({ error: "Uno o más campos exceden el límite permitido." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"VN Digital Web" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO || process.env.SMTP_FROM,
      replyTo: email,
      subject: `[Web] ${asunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2A44; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Nuevo mensaje desde VN Digital</h2>
          </div>
          <div style="background: #F2F4F7; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold; width: 120px;">Nombre:</td>
                <td style="padding: 8px 0; color: #2E3440;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold;">Correo:</td>
                <td style="padding: 8px 0; color: #1F4ED8;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold;">Asunto:</td>
                <td style="padding: 8px 0; color: #2E3440;">${asunto}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
            <p style="color: #2E3440; font-weight: bold; margin-bottom: 8px;">Mensaje:</p>
            <p style="color: #2E3440; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta más tarde." },
      { status: 500 }
    );
  }
}
