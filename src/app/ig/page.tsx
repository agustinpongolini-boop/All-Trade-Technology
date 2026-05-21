"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  MessageCircle,
  Sparkles,
  Boxes,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { COMPANY, CONSULTATION, STATS } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";

const CAL_LINK = CONSULTATION.calCom.handle
  ? `${CONSULTATION.calCom.handle}/${CONSULTATION.calCom.eventSlug}`
  : null;

const WHATSAPP_URL =
  "https://wa.me/" +
  COMPANY.whatsapp +
  "?text=" +
  encodeURIComponent("Hola, llegué desde Instagram. Quiero importar.");

const MAIN_URL = "https://www.alltradetechnology.com";

type LinkCard = {
  icon: LucideIcon;
  label: string;
  caption?: string;
  href?: string;
  cal?: true;
  warm?: boolean;
};

const LINKS: LinkCard[] = [
  {
    icon: Calendar,
    label: "Reservar llamada de 15 min",
    caption: "Sin costo · Sin venta forzada",
    cal: true,
    warm: true,
  },
  {
    icon: FileText,
    label: "Cotizar mi importación",
    caption: "Respuesta en menos de 24hs",
    href: MAIN_URL + "/#cotizar",
  },
  {
    icon: MessageCircle,
    label: "Hablar por WhatsApp",
    caption: "Llegué desde Instagram",
    href: WHATSAPP_URL,
  },
  {
    icon: Sparkles,
    label: "Ver casos de éxito",
    caption: "Operaciones reales que ya hicimos",
    href: MAIN_URL + "/#casos",
  },
  {
    icon: Boxes,
    label: "Nuestros servicios",
    caption: "Courier · Comex · Logística · Almacén",
    href: MAIN_URL + "/#servicios",
  },
];

export default function IGLandingPage() {
  useEffect(() => {
    if (!CAL_LINK) return;
    (async () => {
      const cal = await getCalApi({ namespace: CONSULTATION.calCom.eventSlug });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#FF6B2B" },
          light: { "cal-brand": "#FF6B2B" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-dark">
      {/* Ambient orbs — softer than home so the cards stay legible */}
      <div
        aria-hidden
        className="orb orb-accent animate-orb-a"
        style={{ width: 520, height: 520, top: "-12%", left: "-18%" }}
      />
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-b"
        style={{ width: 480, height: 480, bottom: "-15%", right: "-18%" }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-dark/30 via-transparent to-dark/70"
      />

      <div className="relative z-10 max-w-md mx-auto px-5 pt-14 pb-10 flex flex-col items-center">
        {/* Logo tile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,139,84,0.95) 0%, rgba(255,107,43,0.78) 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.32), 0 16px 36px -8px rgba(255,107,43,0.55), 0 6px 18px -4px rgba(255,107,43,0.30)",
            border: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight leading-none">
            AT
          </span>
        </motion.div>

        {/* Handle + tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="font-heading font-extrabold text-2xl sm:text-[1.65rem] text-white leading-tight text-center"
        >
          All Trade Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="mt-1.5 font-heading text-[12px] text-body/55 tracking-[0.18em] uppercase"
        >
          @{COMPANY.instagramHandle} · Rafaela, AR
        </motion.p>

        {/* Pulse availability chip */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.26 }}
          className="glass-chip-neutral inline-flex items-center gap-2.5 px-3.5 py-1.5 mt-5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-heading text-[10px] text-body/75 uppercase tracking-wider">
            Respondemos en &lt;24hs
          </span>
        </motion.span>

        {/* Pillar message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.34 }}
          className="mt-8 font-body text-[15px] text-body/75 leading-relaxed text-center max-w-sm"
        >
          Importaciones <em className="text-white not-italic font-semibold">sin fricción</em>.{" "}
          Courier, marítimo, aéreo. Desde tu primera importación hasta tu
          operación recurrente.
        </motion.p>

        {/* Links stack */}
        <div className="w-full mt-9 flex flex-col gap-3.5">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            const cardClass = `glass-card ${
              link.warm ? "glass-card-warm" : ""
            } block group cursor-pointer`;

            const inner = (
              <div className="relative flex items-center gap-4 px-5 py-4">
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: link.warm
                      ? "rgba(255,107,43,0.18)"
                      : "rgba(255,255,255,0.05)",
                    border: `1px solid ${
                      link.warm
                        ? "rgba(255,107,43,0.34)"
                        : "rgba(255,255,255,0.10)"
                    }`,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
                  }}
                >
                  <Icon
                    size={18}
                    className={link.warm ? "text-accent-light" : "text-white/90"}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-[14px] text-white leading-tight">
                    {link.label}
                  </p>
                  {link.caption && (
                    <p className="font-heading text-[11px] text-body/55 uppercase tracking-wider mt-1">
                      {link.caption}
                    </p>
                  )}
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-body/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent-light"
                />
              </div>
            );

            const wrapper = (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.42 + i * 0.07 }}
                className={cardClass}
              >
                {inner}
              </motion.div>
            );

            // Cal.com link → use button wrapping to trigger popup; fallback → anchor
            if (link.cal) {
              if (CAL_LINK) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    data-cal-namespace={CONSULTATION.calCom.eventSlug}
                    data-cal-link={CAL_LINK}
                    data-cal-config={JSON.stringify({
                      layout: "month_view",
                      theme: "dark",
                    })}
                    className="w-full text-left p-0 bg-transparent border-0 cursor-pointer"
                  >
                    {wrapper}
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={CONSULTATION.whatsappBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {wrapper}
                </a>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href?.startsWith("http") ? "_blank" : undefined}
                rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {wrapper}
              </a>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.95 }}
          className="mt-10 grid grid-cols-4 gap-2 w-full"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass-chip-neutral text-center px-2 py-3">
              <p
                className="font-heading font-extrabold text-[15px] leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FF8B54 0%, #FF6B2B 100%)",
                }}
              >
                {s.value}
              </p>
              <p className="mt-1 font-heading text-[8px] text-body/55 uppercase tracking-wider leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Footer mini */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <a
            href={COMPANY.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-[11px] text-body/40 hover:text-accent-light transition-colors tracking-wider uppercase flex items-center gap-1.5"
          >
            <InstagramIcon size={11} />@{COMPANY.instagramHandle}
          </a>
          <a
            href={MAIN_URL}
            className="font-heading text-[11px] text-body/40 hover:text-accent-light transition-colors tracking-wider uppercase"
          >
            alltradetechnology.com
          </a>
          <p className="font-heading text-[10px] text-body/25 tracking-wider mt-2">
            © 2026 {COMPANY.name}
          </p>
        </div>
      </div>
    </main>
  );
}
