"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";

const FLAGS = ["🇦🇷", "🇺🇸", "🇪🇺"];

const CHECKLIST = [
  "Equipo dedicado a cada operación",
  "Tecnología propia de seguimiento",
  "Presencia en 3 continentes",
];

export default function About() {
  return (
    <section id="nosotros" className="relative bg-darker py-24 md:py-32 overflow-hidden">
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-b"
        style={{ width: 540, height: 540, top: "10%", left: "40%" }}
      />
      <div
        aria-hidden
        className="orb orb-cool"
        style={{ width: 440, height: 440, bottom: "5%", right: "-10%" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Quiénes somos
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight mb-8">
              Socios,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
                }}
              >
                no proveedores.
              </span>
            </h2>

            <p className="font-body text-[15px] text-body/75 leading-relaxed mb-5">
              No somos un eslabón más en tu cadena logística. Nos integramos a tu
              operación como un departamento externo de comercio exterior,
              defendiendo tus intereses en cada negociación, cada embarque y cada
              despacho aduanero.
            </p>

            <p className="font-body text-[15px] text-body/75 leading-relaxed mb-8">
              Combinamos tecnología propia con presencia física en puntos
              estratégicos para que cada operación tenga trazabilidad completa y
              respuesta inmediata, sin importar el origen de tu carga.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5">
              {CHECKLIST.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                    delay: 0.3 + i * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(255,107,43,0.14)",
                      border: "1px solid rgba(255,107,43,0.32)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                    }}
                  >
                    <Check size={12} className="text-accent-light" strokeWidth={3} />
                  </div>
                  <span className="font-heading text-sm font-medium text-white/85">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right column: Comex Shield card ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            className="glass-card relative"
          >
            {/* Inner ambient light */}
            <div
              aria-hidden
              className="orb orb-accent absolute -top-24 -right-24 opacity-60"
              style={{ width: 280, height: 280 }}
            />

            {/* Header */}
            <div
              className="relative z-10 px-7 md:px-8 pt-7 md:pt-8 pb-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Red Comex Shield
              </span>
              <p className="font-body text-sm text-body/65 mt-1.5">
                Nuestra red conecta tres continentes para blindar tu operación.
              </p>
            </div>

            {/* Locations */}
            <div className="relative z-10">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.country}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                    delay: 0.3 + i * 0.1,
                  }}
                  className="px-7 md:px-8 py-5 flex items-start gap-4"
                  style={{
                    borderBottom:
                      i < LOCATIONS.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="text-xl leading-none">{FLAGS[i]}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[15px] text-white">
                      {loc.country}
                    </h3>
                    <p className="font-heading text-sm text-body/80 mt-0.5">
                      {loc.city}
                    </p>
                    <p className="font-heading text-xs text-body/50 mt-1">
                      {loc.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
