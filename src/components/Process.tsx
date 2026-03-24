"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_NUMBERS = ["01", "02", "03"];

export default function Process() {
  return (
    <section id="proceso" className="bg-dark py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Proceso
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Tres pasos.{" "}
            <span className="text-accent">Cero complicaciones.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
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
              className="relative bg-card border border-border rounded-2xl p-7 md:p-8 overflow-hidden group hover:border-accent/30 transition-colors duration-300"
            >
              {/* Large faded number */}
              <span className="absolute -top-3 -right-1 font-heading font-extrabold text-[7rem] md:text-[8rem] leading-none text-white/[0.03] select-none pointer-events-none">
                {STEP_NUMBERS[i]}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block font-heading font-extrabold text-sm text-accent/60 tracking-wider mb-4">
                  {STEP_NUMBERS[i]}
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm md:text-[15px] text-[#999] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
