import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend( process.env.RESEND_API_KEY );

// Validación simple de email
function isValidEmail( email: string ): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
}

export async function POST( req: NextRequest ) {
  try {
    const body = await req.json();
    console.log( "📥 Datos recibidos en API /contact:", body );
    const { id, nombre, email, asunto, mensaje } = body;

    // Validaciones del lado servidor
    if ( !nombre || !email || !asunto || !mensaje ) {
      return NextResponse.json( { error: "Todos los campos son obligatorios." }, { status: 400 } );
    }
    if ( !isValidEmail( email ) ) {
      return NextResponse.json( { error: "El correo electrónico no es válido." }, { status: 400 } );
    }
    if ( nombre.length > 100 || asunto.length > 150 || mensaje.length > 1000 ) {
      return NextResponse.json( { error: "Uno o más campos exceden el límite permitido." }, { status: 400 } );
    }

    const to_email = process.env.NEXT_PUBLIC_SMTP_TO || "vndigital.pe@gmail.com";
    console.log( "📧 Enviando email a:", to_email );
    console.log( "🔑 API Key configurada:", !!process.env.RESEND_API_KEY );

    const response = await resend.emails.send( {
      from: "VN Digital <noreply@vndigital.pe>",
      to: to_email,
      replyTo: email,
      subject: `[Web] ${ asunto }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2A44; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Nuevo mensaje desde VN Digital</h2>
          </div>
          <div style="background: #F2F4F7; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold; width: 120px;">Nombre:</td>
                <td style="padding: 8px 0; color: #2E3440;">${ nombre }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold;">Correo:</td>
                <td style="padding: 8px 0; color: #1F4ED8;">${ email }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #2E3440; font-weight: bold;">Asunto:</td>
                <td style="padding: 8px 0; color: #2E3440;">${ asunto }</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
            <p style="color: #2E3440; font-weight: bold; margin-bottom: 8px;">Mensaje:</p>
            <p style="color: #2E3440; line-height: 1.6; white-space: pre-wrap;">${ mensaje }</p>
          </div>
        </div>
      `,
    } );

    console.log( "✅ Email enviado:", response );

    return NextResponse.json( { ok: true, messageId: id } );
  } catch ( error ) {
    console.error( "❌ Error al enviar email con Resend:", error );
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta más tarde." },
      { status: 500 }
    );
  }
}
