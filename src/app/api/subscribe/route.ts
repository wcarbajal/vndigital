import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend( process.env.RESEND_API_KEY );

function isValidEmail( email: string ): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
}

export async function POST( req: NextRequest ) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validaciones
    if ( !email ) {
      return NextResponse.json(
        { error: "El correo es requerido." },
        { status: 400 }
      );
    }

    if ( !isValidEmail( email ) ) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    console.log( "📧 Nueva suscripción:", email );

    // Enviar email de confirmación al usuario
    const userEmailResponse = await resend.emails.send( {
      from: "VN Digital <noreply@vndigital.pe>",
      to: email,
      subject: "¡Bienvenido a VN Digital!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F2A44 0%, #1a3a6b 100%); padding: 40px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">¡Bienvenido a VN Digital!</h1>
          </div>
          <div style="background: #F2F4F7; padding: 40px; border-radius: 0 0 8px 8px;">
            <p style="color: #2E3440; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Gracias por suscribirte a nuestro newsletter. A partir de ahora recibirás noticias exclusivas sobre:
            </p>
            <ul style="color: #2E3440; font-size: 14px; line-height: 1.8; margin-bottom: 20px;">
              <li>✅ Nuevas soluciones y actualizaciones</li>
              <li>✅ Tendencias tecnológicas y mejores prácticas</li>
              <li>✅ Casos de éxito de nuestros clientes</li>
              <li>✅ Ofertas especiales y promociones</li>
            </ul>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #666; font-size: 12px; line-height: 1.6;">
              Si no deseas recibir más correos, puedes darte de baja en cualquier momento.
            </p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://vndigital.pe" style="background: #22c55e; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
                Visita nuestro sitio
              </a>
            </div>
          </div>
        </div>
      `,
    } );

    if ( userEmailResponse.error ) {
      console.warn( "⚠️ Email de bienvenida no enviado a usuario (limitación dominio Resend):", userEmailResponse.error.message );
    } else {
      console.log( "✅ Email de confirmación enviado a:", email, "ID:", userEmailResponse.data?.id );
    }

    // Enviar notificación al admin
    const adminEmailResponse = await resend.emails.send( {
      from: "VN Digital <noreply@vndigital.pe>",
      to: process.env.NEXT_PUBLIC_SMTP_TO || "vndigital.pe@gmail.com",
      subject: "[Newsletter] Nueva suscripción",
      html: `
        <p><strong>Nuevo suscriptor:</strong> ${ email }</p>
        <p><strong>Fecha:</strong> ${ new Date().toLocaleString() }</p>
      `,
    } );

    if ( adminEmailResponse.error ) {
      console.error( "❌ Error enviando notificación al admin:", adminEmailResponse.error );
    } else {
      console.log( "✅ Notificación enviada al admin. ID:", adminEmailResponse.data?.id );
    }

    return NextResponse.json( { ok: true, message: "Suscripción confirmada" } );
  } catch ( error ) {
    console.error( "❌ Error en suscripción:", error );
    return NextResponse.json(
      { error: "Error al procesar la suscripción." },
      { status: 500 }
    );
  }
}
