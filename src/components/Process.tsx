"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_NUMBERS = ["01", "02", "03"];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-dark py-24 md:py-32 overflow-hidden">
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-a"
        style={{ width: 560, height: 560, top: "20%", right: "-12%" }}
      />
      <div
        aria-hidden
        className="orb orb-cool"
        style={{ width: 460, height: 460, bottom: "10%", left: "-10%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Proceso
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Tres pasos.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
              }}
            >
              Cero complicaciones.
            </span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connector beam (desktop only) — sits behind the step circles */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[16.66%] right-[16.66%] -top-7 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,107,43,0.45) 18%, rgba(255,139,84,0.85) 50%, rgba(255,107,43,0.45) 82%, transparent 100%)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 18px rgba(255,107,43,0.35)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.12,
                }}
                className="glass-card relative !overflow-visible"
              >
                {/* Floating step circle */}
                <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-20">
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(255,139,84,0.95) 0%, rgba(255,107,43,0.78) 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.32), 0 12px 28px -6px rgba(255,107,43,0.55), 0 0 0 6px rgba(13,13,13,0.85)",
                      border: "1px solid rgba(255,255,255,0.20)",
                    }}
                  >
                    <span className="font-heading font-extrabold text-base text-white tracking-tight">
                      {STEP_NUMBERS[i]}
                    </span>
                  </div>
                </div>

                {/* Large faded number watermark */}
                <span
                  aria-hidden
                  className="absolute -bottom-6 -right-2 font-heading font-extrabold text-[8rem] md:text-[9rem] leading-none select-none pointer-events-none"
                  style={{
                    color: "rgba(255,255,255,0.04)",
                  }}
                >
                  {STEP_NUMBERS[i]}
                </span>

                {/* Content */}
                <div className="relative z-10 pt-12 pb-7 px-7 md:px-8 md:pt-14 md:pb-8 text-center">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm md:text-[15px] text-body/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
