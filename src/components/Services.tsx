"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  PackageOpen,
  Briefcase,
  Ship,
  Warehouse,
  Key,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  courier: PackageOpen,
  comex: Briefcase,
  logistica: Ship,
  almacen: Warehouse,
  "llave-en-mano": Key,
};

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  const featured = SERVICES.find((s) => s.id === "courier");
  const rest = SERVICES.filter((s) => s.id !== "courier");

  return (
    <section id="servicios" className="relative bg-darker py-24 md:py-32 overflow-hidden">
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-b"
        style={{ width: 560, height: 560, top: "10%", left: "-12%" }}
      />
      <div
        aria-hidden
        className="orb orb-cool"
        style={{ width: 480, height: 480, bottom: "5%", right: "-8%" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Servicios
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Todo lo que necesitás para importar{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
              }}
            >
              sin fricción
            </span>
          </h2>
        </motion.div>

        {/* Featured: Courier */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="glass-card glass-card-warm mb-6 md:mb-8 relative"
          >
            {/* Inner ambient light to lean into the warm tint */}
            <div
              aria-hidden
              className="orb orb-accent absolute -top-20 -left-20 opacity-70"
              style={{ width: 320, height: 320 }}
            />

            <div className="relative p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                {/* Recommended chip */}
                <span className="glass-chip inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-light">
                  <Sparkles size={11} className="opacity-80" />
                  Recomendado para empezar
                </span>

                <div className="flex items-start gap-4">
                  {/* Icon tile */}
                  <div
                    className="relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(255,139,84,0.92) 0%, rgba(255,107,43,0.75) 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 24px -6px rgba(255,107,43,0.45)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    <PackageOpen size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                      {featured.title}
                    </h3>
                    <p className="font-body text-sm md:text-[15px] text-body/80 leading-relaxed max-w-xl">
                      {featured.description}
                    </p>
                  </div>
                </div>

                {/* Feature pills */}
                <ul className="mt-5 flex flex-wrap gap-2 ml-0 md:ml-[72px]">
                  {featured.features.map((f) => (
                    <li
                      key={f}
                      className="glass-chip px-3.5 py-1.5 font-heading text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent-light"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#cotizar"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-btn-primary group inline-flex items-center justify-center gap-2 font-heading text-[12px] font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl"
              >
                Empezar con courier
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        )}

        {/* Rest of services */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {rest.map((service, i) => {
            const isActive = active === service.id;
            const Icon = ICONS[service.id] ?? Briefcase;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.08,
                }}
                onClick={() => setActive(isActive ? null : service.id)}
                className={`glass-card cursor-pointer transition-all duration-300 ${
                  isActive ? "ring-1 ring-accent/40" : ""
                }`}
              >
                <div className="relative p-7 md:p-8">
                  {/* Icon tile */}
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(255,107,43,0.10)",
                      border: "1px solid rgba(255,107,43,0.25)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
                    }}
                  >
                    <Icon size={20} className="text-accent-light" />
                  </div>

                  <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm md:text-[15px] text-body/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="glass-chip px-3 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-accent-light"
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
