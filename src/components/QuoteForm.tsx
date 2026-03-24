"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const INPUT_CLASS =
  "w-full bg-darker border border-border rounded-lg px-4 py-3.5 text-white font-body text-sm placeholder:italic placeholder:text-[#555] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200";

const LABEL_CLASS =
  "block font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-2";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-reset to idle 5 seconds after success
  useEffect(() => {
    if (status === "success") {
      timerRef.current = setTimeout(() => setStatus("idle"), 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="cotizar" className="bg-dark py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Contacto
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.8rem] text-white leading-tight">
            Cotizá tu operación gratis
          </h2>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-7 md:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="py-16 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  ¡Recibimos tu consulta!
                </h3>
                <p className="font-body text-sm text-[#999] max-w-md">
                  Nuestro equipo va a analizar tu operación y te contactará en
                  menos de 24 horas con una propuesta detallada.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-heading text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-light transition-colors"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Row 1: Nombre + Empresa */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={LABEL_CLASS}>
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className={INPUT_CLASS}
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={LABEL_CLASS}>
                      Empresa *
                    </label>
                    <input
                      id="company"
                      name="company"
                      required
                      className={INPUT_CLASS}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Teléfono */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={LABEL_CLASS}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={INPUT_CLASS}
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={LABEL_CLASS}>
                      Teléfono / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className={INPUT_CLASS}
                      placeholder="+54 9 3492 ..."
                    />
                  </div>
                </div>

                {/* Row 3: Producto + País */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className={LABEL_CLASS}>
                      ¿Qué producto querés importar? *
                    </label>
                    <input
                      id="product"
                      name="product"
                      required
                      className={INPUT_CLASS}
                      placeholder="Ej: Maquinaria industrial, textiles..."
                    />
                  </div>
                  <div>
                    <label htmlFor="origin" className={LABEL_CLASS}>
                      País de origen
                    </label>
                    <input
                      id="origin"
                      name="origin"
                      className={INPUT_CLASS}
                      placeholder="Ej: China, Estados Unidos..."
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label htmlFor="message" className={LABEL_CLASS}>
                    Mensaje adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder="Contanos más detalles: volumen estimado, frecuencia, urgencia..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading text-sm font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-accent/20"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud de cotización
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>

                {/* Error */}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm flex items-center gap-2 justify-center"
                  >
                    <AlertCircle size={15} />
                    Error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                  </motion.p>
                )}

                {/* Subtext */}
                <p className="text-center font-heading text-[11px] text-[#555] tracking-wider pt-1">
                  Sin compromiso · Respuesta en menos de 24hs · 100% confidencial
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
