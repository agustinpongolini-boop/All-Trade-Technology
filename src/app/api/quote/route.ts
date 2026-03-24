import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

interface QuoteRequest {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  origin?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: QuoteRequest = await req.json();
    const { name, company, email, phone, product, origin, message } = body;

    // Validate required fields
    if (!name || !company || !email || !product) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios: nombre, empresa, email y producto son requeridos." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1. Notification email to sales team
    await resend.emails.send({
      from: "All Trade Technology <onboarding@resend.dev>",
      to: "sales@alltradetechnology.com",
      subject: `Nueva cotización: ${product} — ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #DAD9D9; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #FF6B2B; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #FF6B2B; font-size: 20px; margin: 0;">Nueva solicitud de cotización</h1>
            <p style="color: #999; font-size: 13px; margin: 4px 0 0;">Recibida desde alltradetechnology.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #999; width: 140px; vertical-align: top;">Nombre</td>
              <td style="padding: 10px 0; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Empresa</td>
              <td style="padding: 10px 0; color: #fff;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #FF6B2B;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Teléfono</td>
              <td style="padding: 10px 0; color: #fff;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Producto</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold;">${product}</td>
            </tr>
            ${origin ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">País de origen</td>
              <td style="padding: 10px 0; color: #fff;">${origin}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 0; color: #fff;">${message}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #2A2A2A; font-size: 12px; color: #555;">
            Responder a este email contacta directamente al cliente.
          </div>
        </div>
      `,
      replyTo: email,
    });

    // 2. Confirmation email to the client
    await resend.emails.send({
      from: "All Trade Technology <onboarding@resend.dev>",
      to: email,
      subject: "Recibimos tu consulta — All Trade Technology",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #DAD9D9; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #FF6B2B; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #fff; font-size: 20px; margin: 0;">¡Recibimos tu consulta, ${name}!</h1>
          </div>

          <p style="font-size: 15px; line-height: 1.7; color: #BBB;">
            Gracias por contactarte con <strong style="color: #FF6B2B;">All Trade Technology</strong>.
            Nuestro equipo ya está analizando tu solicitud sobre <strong style="color: #fff;">${product}</strong>.
          </p>

          <p style="font-size: 15px; line-height: 1.7; color: #BBB;">
            Te contactamos en <strong style="color: #fff;">menos de 24 horas</strong> con una propuesta
            detallada que incluye costos, tiempos y opciones logísticas.
          </p>

          <div style="margin: 28px 0; padding: 20px; background: #1A1A1A; border-radius: 8px; border-left: 3px solid #FF6B2B;">
            <p style="margin: 0; font-size: 14px; color: #999;">
              Si necesitás una respuesta urgente, escribinos por WhatsApp:
            </p>
            <a href="https://wa.me/5493492630909" style="color: #FF6B2B; font-size: 15px; font-weight: bold; text-decoration: none;">
              +54 9 3492 630909
            </a>
          </div>

          <p style="font-size: 13px; color: #666; margin-top: 24px;">
            — Equipo All Trade Technology<br/>
            R. Casabella 985, Rafaela, Santa Fe, Argentina
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud." },
      { status: 500 }
    );
  }
}
