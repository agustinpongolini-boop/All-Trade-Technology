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

const TAG_STYLES: Record<string, string> = {
  Exportación: "bg-accent/15 text-accent",
  Importación: "bg-[#94a3b8]/15 text-[#94a3b8]",
  Logística: "bg-[#6ee7b7]/15 text-[#6ee7b7]",
};

// Card width + gap in pixels (matches Tailwind classes below)
const CARD_W = 340;
const GAP = 24;
const SPEED = 0.5; // px per frame (~30px/s at 60fps)

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Total width of one full set
  const setWidth = CASES.length * (CARD_W + GAP);

  const tick = useCallback(() => {
    if (!paused) {
      offsetRef.current -= SPEED;
      // Reset seamlessly when one full set has scrolled by
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

  // We render 3 copies of the set so the track is always visually full
  const items = [...CASES, ...CASES, ...CASES];

  return (
    <section id="casos" className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            <span className="text-accent">Resultados concretos.</span>
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-dark to-transparent" />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: GAP }}
        >
          {items.map((c, i) => (
            <article
              key={`${c.title}-${i}`}
              className="group flex-shrink-0 bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tag pill */}
                <span
                  className={`inline-block font-heading text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full mb-3 ${TAG_STYLES[c.tag] ?? ""}`}
                >
                  {c.tag}
                </span>

                <h3 className="font-heading font-bold text-[15px] text-white mb-1.5 leading-snug group-hover:text-accent transition-colors duration-300">
                  {c.title}
                </h3>

                {/* Route */}
                <p className="flex items-center gap-1.5 font-body text-xs text-[#888] mb-3">
                  <ArrowRight size={12} className="text-accent shrink-0" />
                  {c.route}
                </p>

                <p className="font-body text-xs text-[#666] leading-relaxed line-clamp-3">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
