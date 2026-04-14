import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `Sos el asistente virtual de All Trade Technology, el primer operador híbrido de comercio exterior del Cono Sur. Estamos en Rafaela, Santa Fe, Argentina.

SERVICIOS:
- Departamento de Comercio Exterior Tercerizado (tu equipo de comex sin costos fijos)
- Importaciones: gestión integral desde cualquier origen (China, USA, Europa, Brasil)
- Exportaciones: apertura de mercados internacionales
- Logística Internacional: flete marítimo, aéreo, terrestre
- Despacho Aduanero: clasificación arancelaria, documentación, nacionalización
- Almacenamiento: depósito propio en Rafaela + red logística en USA y Europa
- Inspecciones y Control de Calidad en origen

DIFERENCIAL - RED COMEX SHIELD:
- Operador híbrido: combinamos servicios de freight forwarder + agente de compras + consultor comex
- Logística propia en Argentina, USA y Europa
- No somos intermediarios, somos operadores directos
- Equipo propio en cada eslabón de la cadena

COSTOS ORIENTATIVOS DE IMPORTACIÓN A ARGENTINA:
- Derechos de importación: 12-18% (según producto)
- Tasa estadística: 3%
- IVA: 21%
- IVA adicional: 20%
- Percepción ganancias: 6%
- Percepción IIBB: variable por provincia
- Honorarios despachante + terminal + flete interno: variable

PROCESO DE TRABAJO:
1. Consulta inicial: evaluamos tu proyecto sin compromiso
2. Análisis de viabilidad: costos, tiempos, regulaciones
3. Gestión integral: compra, inspección, flete, aduana, entrega
4. Seguimiento: tracking en tiempo real de tu carga

TAMBIÉN IMPORTAMOS NAVES INDUSTRIALES:
- A través de nuestra división All Trade Steel (alltradesteel.com)
- Naves de alma llena (Solid Web) importadas desde China
- USD 120-155/m² vs USD 170-220 fabricación local

CONTACTO:
- Email: sales@alltradetechnology.com
- WhatsApp: +54 9 3492 630909
- Web: www.alltradetechnology.com
- Dirección: R. Casabella 985, Rafaela, Santa Fe

REGLAS:
- Respondé siempre en español
- Sé conciso pero completo
- Si preguntan algo que no sabés, ofrecé conectarlos con un asesor por WhatsApp
- Si muestran interés en cotizar, pedidles: nombre, empresa, email, qué quieren importar/exportar, origen/destino
- Nunca inventés datos
- Tono profesional pero cercano
- Si preguntan por naves industriales o galpones, mencioná All Trade Steel`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Se requiere al menos un mensaje" },
        { status: 400 }
      );
    }

    // Filter messages: first must be "user", roles must alternate
    const apiMessages: { role: "user" | "assistant"; content: string }[] = [];
    for (const msg of messages) {
      const role = msg.role as "user" | "assistant";
      if (apiMessages.length === 0 && role === "assistant") continue;
      if (
        apiMessages.length > 0 &&
        apiMessages[apiMessages.length - 1].role === role
      )
        continue;
      apiMessages.push({ role, content: msg.content });
    }

    if (apiMessages.length === 0) {
      return NextResponse.json(
        { error: "Se requiere al menos un mensaje de usuario" },
        { status: 400 }
      );
    }

    const client = new Anthropic();

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: apiMessages,
    });

    const textContent = response.content.find((block) => block.type === "text");
    const text = textContent && "text" in textContent ? textContent.text : "";

    return NextResponse.json({ message: text });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Chat API error:", errMsg);
    console.error("Chat API error details:", error instanceof Error ? error.stack : String(error));
    return NextResponse.json(
      { error: `Error al procesar tu mensaje: ${errMsg}` },
      { status: 500 }
    );
  }
}
