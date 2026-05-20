"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-3 sm:top-4" : "top-5 sm:top-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`glass-pill flex items-center justify-between gap-3 pl-3 pr-2 sm:pl-4 sm:pr-3 h-14 transition-all duration-500 ${
            scrolled ? "saturate-150" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 pl-1 group"
          >
            <div
              className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,139,84,0.95) 0%, rgba(255,107,43,0.82) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.32), 0 6px 14px -4px rgba(255,107,43,0.45)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <span className="font-heading font-extrabold text-[11px] text-white leading-none tracking-tight">
                AT
              </span>
            </div>
            <span className="font-heading font-semibold text-[10px] tracking-[0.22em] uppercase text-white/90 hidden sm:block">
              All Trade Technology
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-[11px] font-medium uppercase tracking-[0.15em] text-body/70 hover:text-white px-3.5 py-2 rounded-full hover:bg-white/[0.06] transition-all duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="font-heading text-[11px] font-medium uppercase tracking-[0.15em] text-body/70 hover:text-white px-3.5 py-2 rounded-full hover:bg-white/[0.06] transition-all duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#cotizar"
            onClick={(e) => scrollTo(e, "#cotizar")}
            className="glass-btn-primary hidden lg:inline-flex font-heading text-[11px] font-semibold uppercase tracking-[0.15em] px-5 py-2 rounded-full items-center"
          >
            Cotizar
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-body/80 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mx-auto max-w-6xl px-4 mt-3"
          >
            <nav className="glass-card !rounded-2xl px-3 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) =>
                link.href.startsWith("/") ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-body/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-all"
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-body/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-all"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.a
                href="#cotizar"
                onClick={(e) => scrollTo(e, "#cotizar")}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: NAV_LINKS.length * 0.04 }}
                className="glass-btn-primary mt-3 text-center font-heading text-sm font-semibold uppercase tracking-[0.15em] px-6 py-3.5 rounded-xl"
              >
                Cotizar operación
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
