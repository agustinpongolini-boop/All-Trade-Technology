"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {started ? count : 0}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Ambient orb */}
      <div
        aria-hidden
        className="orb orb-accent-soft animate-orb-a"
        style={{
          width: 720,
          height: 360,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.7,
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((stat, i) => {
            const { num, suffix } = parseStatValue(stat.value);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card !rounded-2xl"
              >
                <div className="relative px-5 py-6 md:px-6 md:py-7 text-center">
                  <p
                    className="font-heading font-extrabold text-4xl sm:text-5xl md:text-[3rem] leading-none bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #FF8B54 0%, #FF6B2B 100%)",
                    }}
                  >
                    <CountUp target={num} suffix={suffix} started={inView} />
                  </p>
                  <p className="mt-3 font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-body/60">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
