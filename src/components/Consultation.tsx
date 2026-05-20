"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Video, MessageCircle, Check } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { CONSULTATION } from "@/lib/constants";

const WHAT_HAPPENS = [
  "Te explicamos cómo es importar tu producto desde cero",
  "Te decimos honestamente qué modalidad conviene (courier, aéreo, marítimo)",
  "Salís con un primer camino concreto, no con un PDF",
];

const CAL_LINK = CONSULTATION.calCom.handle
  ? `${CONSULTATION.calCom.handle}/${CONSULTATION.calCom.eventSlug}`
  : null;

export default function Consultation() {
  // Initialize Cal.com popup theme once on mount.
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

  const ctaClass =
    "glass-btn-primary group inline-flex items-center justify-center gap-2.5 font-heading text-[12px] font-semibold uppercase tracking-wider px-7 py-3.5 rounded-xl cursor-pointer";

  const ctaContent = (
    <>
      <Video size={15} className="opacity-90" />
      Reservar mi llamada
      <ArrowRight
        size={15}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </>
  );

  return (
    <section
      id="llamada"
      className="relative bg-darker py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="orb orb-accent animate-orb-a"
        style={{ width: 620, height: 620, top: "-15%", left: "-8%" }}
      />
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-b"
        style={{ width: 480, height: 480, bottom: "-10%", right: "-8%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Asesoría sin costo
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            ¿Primera vez importando?{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8B54 0%, #FF6B2B 55%, #FF8B54 100%)",
              }}
            >
              Charlemos 15 minutos.
            </span>
          </h2>
          <p className="mt-5 font-body text-base md:text-[17px] text-body/75 max-w-2xl mx-auto leading-relaxed">
            Antes de llenar formularios o cotizar nada, hablá con alguien que
            importa todas las semanas. Una videollamada corta, sin tecnicismos.
            Si conviene, seguimos. Si no, te lo decimos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          className="glass-card glass-card-warm relative"
        >
          <div
            aria-hidden
            className="orb orb-accent absolute -top-20 -right-20 opacity-60"
            style={{ width: 320, height: 320 }}
          />

          <div className="relative p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <ul className="space-y-3.5 mb-7">
                {WHAT_HAPPENS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut" as const,
                      delay: 0.25 + i * 0.08,
                    }}
                    className="flex items-start gap-3.5"
                  >
                    <div
                      className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(255,107,43,0.16)",
                        border: "1px solid rgba(255,107,43,0.36)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14)",
                      }}
                    >
                      <Check
                        size={12}
                        className="text-accent-light"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="font-body text-[15px] text-white/85 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                {CAL_LINK ? (
                  <button
                    type="button"
                    data-cal-namespace={CONSULTATION.calCom.eventSlug}
                    data-cal-link={CAL_LINK}
                    data-cal-config={JSON.stringify({
                      layout: "month_view",
                      theme: "dark",
                    })}
                    className={ctaClass}
                  >
                    {ctaContent}
                  </button>
                ) : (
                  <a
                    href={CONSULTATION.whatsappBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClass}
                  >
                    {ctaContent}
                  </a>
                )}
                <a
                  href={CONSULTATION.whatsappFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary group inline-flex items-center justify-center gap-2.5 font-heading text-[12px] font-semibold uppercase tracking-wider px-7 py-3.5 rounded-xl"
                >
                  <MessageCircle size={15} className="opacity-90" />
                  Hablar por WhatsApp
                </a>
              </div>

              <p className="font-heading text-[11px] text-body/55 tracking-wider uppercase">
                Sin compromiso · Sin venta forzada · Con un humano que sabe
              </p>
            </div>

            {/* Right: glass slot tile */}
            <div className="hidden md:block">
              <div
                className="relative w-[260px] h-[260px] rounded-3xl flex flex-col items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,107,43,0.10) 100%)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.16), 0 14px 36px -12px rgba(255,107,43,0.30)",
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                }}
              >
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-heading text-[10px] text-emerald-300/80 uppercase tracking-wider">
                    Disponible esta semana
                  </span>
                </div>

                <div className="font-heading font-extrabold leading-none">
                  <span
                    className="bg-clip-text text-transparent text-[5.5rem]"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #FF8B54 0%, #FF6B2B 100%)",
                    }}
                  >
                    15
                  </span>
                </div>
                <span className="font-heading text-[11px] text-body/60 uppercase tracking-[0.2em] mt-2">
                  Minutos
                </span>

                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2 py-2 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Video size={12} className="text-accent-light" />
                  <span className="font-heading text-[10px] text-body/70 uppercase tracking-wider">
                    Videollamada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
