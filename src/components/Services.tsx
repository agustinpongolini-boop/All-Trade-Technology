"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const EMOJIS = ["🌐", "🚢", "📦", "🔑"];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="servicios" className="bg-darker py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Servicios
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Todo lo que necesitás para importar{" "}
            <span className="text-accent">sin fricción</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service, i) => {
            const isActive = active === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.1,
                }}
                onClick={() =>
                  setActive(isActive ? null : service.id)
                }
                className={`
                  relative overflow-hidden rounded-2xl border cursor-pointer
                  transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-card/80 border-accent/40"
                      : "bg-card border-border hover:bg-card/60"
                  }
                `}
              >
                {/* Top border slide-in */}
                <div
                  className={`
                    absolute top-0 left-0 h-[2px] bg-accent transition-all duration-500 ease-out
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />

                <div className="p-7 md:p-8">
                  {/* Emoji */}
                  <span className="text-3xl block mb-5">{EMOJIS[i]}</span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm md:text-[15px] text-[#999] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature pills */}
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-[11px] font-heading font-medium uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
