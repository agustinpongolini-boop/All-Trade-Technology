"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* ── Ambient orbs (light source behind the glass) ── */}
      <div
        aria-hidden
        className="orb orb-accent animate-orb-a"
        style={{
          width: 720,
          height: 720,
          top: "-12%",
          left: "-8%",
        }}
      />
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-b"
        style={{
          width: 620,
          height: 620,
          bottom: "-18%",
          right: "-10%",
        }}
      />
      <div
        aria-hidden
        className="orb orb-cool"
        style={{
          width: 540,
          height: 540,
          top: "30%",
          right: "20%",
        }}
      />

      {/* ── Subtle vignette to keep text readable ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/80 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8 inline-flex">
          <span className="glass-chip inline-flex items-center gap-2 px-5 py-2 font-heading text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            <Sparkles size={12} className="opacity-80" />
            Primer operador híbrido del Cono Sur
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-heading font-extrabold text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.1] tracking-tight text-white"
        >
          Domina tu carga.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
            }}
          >
            Protege tu capital.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-7 font-body text-base sm:text-lg md:text-xl leading-relaxed text-body/75 max-w-2xl mx-auto"
        >
          {COMPANY.subtitle}
        </motion.p>

        {/* Two doors */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cotizar"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-btn-primary group font-heading text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-xl flex items-center gap-2.5"
          >
            Cotizar mi operación
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#llamada"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#llamada")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-btn-secondary group font-heading text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-xl flex items-center gap-2.5"
          >
            Es mi primera importación
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 opacity-70"
            />
          </a>
        </motion.div>

        {/* Pulse dot + availability */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 flex items-center justify-center"
        >
          <span className="glass-chip-neutral inline-flex items-center gap-2.5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-heading text-[10px] sm:text-xs text-body/70 uppercase tracking-wider">
              Respondemos cotizaciones en menos de 24 horas
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
