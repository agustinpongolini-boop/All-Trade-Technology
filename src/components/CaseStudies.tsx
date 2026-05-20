"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const CASES = [
  {
    title: "Exportación de Autopartes a EE.UU.",
    tag: "Exportación",
    route: "Rafaela, ARG → California, EE.UU.",
    description:
      "Guías y asientos de válvulas de precisión exportados a planta norteamericana. Packaging internacional certificado y entrega puerta a puerta.",
    image: "/cases/case-1.jpg",
  },
  {
    title: "Recepción de Contenedor Marítimo",
    tag: "Importación",
    route: "China → Rafaela, Santa Fe",
    description:
      "Contenedor completo recibido y descargado en planta con equipo especializado. Coordinación de flete marítimo y transporte terrestre sin demoras.",
    image: "/cases/case-2.jpg",
  },
  {
    title: "Exportación Industrial a Australia",
    tag: "Exportación",
    route: "Rafaela, ARG → Inglewood, Australia",
    description:
      "Industria argentina llegando a Oceanía. Packaging certificado con trazabilidad total desde fábrica hasta destino final en Austral Distribution.",
    image: "/cases/case-3.jpg",
  },
  {
    title: "Almacenamiento y Distribución Nacional",
    tag: "Logística",
    route: "Depósito propio, Rafaela",
    description:
      "Almacén propio con control de inventario y preparación de pedidos. Operaciones de picking y packing para distribución en todo el país.",
    image: "/cases/case-4.jpg",
  },
  {
    title: "Importación de Maquinaria Pesada",
    tag: "Importación",
    route: "Origen internacional → Interior de Santa Fe",
    description:
      "Cajón de gran porte descargado y entregado en planta del cliente. Coordinación de equipo especial y transporte terrestre con cuidado extremo.",
    image: "/cases/case-5.jpg",
  },
  {
    title: "Despacho de Mercadería de Exportación",
    tag: "Exportación",
    route: "Rafaela → Destino internacional",
    description:
      "Mercadería embalada con estándares internacionales lista para despacho. Gestión aduanera completa y carga en transporte de larga distancia.",
    image: "/cases/case-6.jpg",
  },
  {
    title: "Importación de Maquinaria CNC",
    tag: "Importación",
    route: "China → Rafaela, Santa Fe",
    description:
      "Máquina CNC de gran porte importada y entregada en planta. Gestión completa desde fábrica en origen, flete marítimo, despacho aduanero y entrega final.",
    image: "/cases/case-11.jpg",
  },
  {
    title: "Logística de Última Milla Industrial",
    tag: "Logística",
    route: "Depósito → Cliente final",
    description:
      "Entrega de carga pesada en zona industrial con autoelevadores propios. Última milla resuelta con equipo especializado y supervisión directa.",
    image: "/cases/case-8.jpg",
  },
] as const;

const TAG_STYLES: Record<string, { bg: string; border: string; text: string }> = {
  Exportación: {
    bg: "rgba(255,107,43,0.14)",
    border: "rgba(255,107,43,0.32)",
    text: "#FF8B54",
  },
  Importación: {
    bg: "rgba(148,163,184,0.14)",
    border: "rgba(148,163,184,0.30)",
    text: "#94a3b8",
  },
  Logística: {
    bg: "rgba(110,231,183,0.14)",
    border: "rgba(110,231,183,0.30)",
    text: "#6ee7b7",
  },
};

const CARD_W = 340;
const GAP = 24;
const SPEED = 0.5;

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  const setWidth = CASES.length * (CARD_W + GAP);

  const tick = useCallback(() => {
    if (!paused) {
      offsetRef.current -= SPEED;
      if (Math.abs(offsetRef.current) >= setWidth) {
        offsetRef.current += setWidth;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [paused, setWidth]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const items = [...CASES, ...CASES, ...CASES];

  return (
    <section id="casos" className="relative bg-dark py-24 md:py-32 overflow-hidden">
      {/* Ambient orb */}
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-a"
        style={{ width: 640, height: 320, top: "30%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Casos de éxito
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Operaciones reales.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
              }}
            >
              Resultados concretos.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-dark to-transparent" />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: GAP }}
        >
          {items.map((c, i) => {
            const tag = TAG_STYLES[c.tag];
            return (
              <article
                key={`${c.title}-${i}`}
                className="glass-card group flex-shrink-0 !rounded-2xl"
                style={{ width: CARD_W }}
              >
                {/* Image */}
                <div className="relative aspect-video bg-[#1a1a1a] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="340px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-5">
                  {/* Tag glass chip */}
                  <span
                    className="inline-block font-heading text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: tag?.bg ?? "rgba(255,255,255,0.06)",
                      border: `1px solid ${tag?.border ?? "rgba(255,255,255,0.10)"}`,
                      color: tag?.text ?? "#fff",
                      backdropFilter: "blur(8px) saturate(140%)",
                      WebkitBackdropFilter: "blur(8px) saturate(140%)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
                    }}
                  >
                    {c.tag}
                  </span>

                  <h3 className="font-heading font-bold text-[15px] text-white mb-1.5 leading-snug group-hover:text-accent-light transition-colors duration-300">
                    {c.title}
                  </h3>

                  {/* Route */}
                  <p className="flex items-center gap-1.5 font-body text-xs text-body/65 mb-3">
                    <ArrowRight size={12} className="text-accent shrink-0" />
                    {c.route}
                  </p>

                  <p className="font-body text-xs text-body/55 leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
