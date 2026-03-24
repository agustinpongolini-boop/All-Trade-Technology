"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,43,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,43,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,43,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Vignette edges ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8 inline-block">
          <span className="inline-block font-heading text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-accent border border-accent/30 rounded-full px-5 py-2 bg-accent/5">
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
          <span className="text-accent">Protege tu capital.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-7 font-body text-base sm:text-lg md:text-xl leading-relaxed text-[#999] max-w-2xl mx-auto"
        >
          {COMPANY.subtitle}
        </motion.p>

        {/* Buttons */}
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
            className="group bg-accent hover:bg-accent-light text-white font-heading text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-2.5 shadow-lg shadow-accent/20"
          >
            Cotizar mi operación
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-accent/30 text-accent hover:bg-accent/5 hover:border-accent/50 font-heading text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200"
          >
            Ver servicios
          </a>
        </motion.div>

        {/* Pulse dot + availability */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 flex items-center justify-center gap-2.5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="font-heading text-xs text-[#666] uppercase tracking-wider">
            Respondemos cotizaciones en menos de 24 horas
          </span>
        </motion.div>
      </div>
    </section>
  );
}
