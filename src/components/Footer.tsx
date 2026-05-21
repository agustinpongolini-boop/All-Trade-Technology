import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="relative bg-darker overflow-hidden">
      {/* Top edge highlight */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,107,43,0.30) 50%, transparent 100%)",
        }}
      />
      {/* Ambient orb */}
      <div
        aria-hidden
        className="orb orb-accent-soft"
        style={{ width: 560, height: 280, top: "20%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.35 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Company */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
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
              <span className="font-heading font-semibold text-xs tracking-[0.18em] uppercase text-white">
                All Trade Technology
              </span>
            </div>
            <p className="font-body text-[13px] text-body/55 leading-relaxed">
              Eliminamos los obstáculos entre tu producto y el mundo. Tecnología
              y logística propia para importar sin fricción.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-body/45 mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicios"
                    className="font-heading text-[13px] text-body/65 hover:text-accent-light transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Office */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-body/45 mb-5">
              Oficina
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent/70 shrink-0 mt-0.5" />
                <span className="font-heading text-[13px] text-body/65 leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-accent/70 shrink-0 mt-0.5" />
                <span className="font-heading text-[13px] text-body/65">
                  {COMPANY.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-body/45 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent/70 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-heading text-[13px] text-body/65 hover:text-accent-light transition-colors duration-200"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent/70 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="font-heading text-[13px] text-body/65 hover:text-accent-light transition-colors duration-200"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon size={14} className="text-accent/70 shrink-0" />
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[13px] text-body/65 hover:text-accent-light transition-colors duration-200"
                >
                  @{COMPANY.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-heading text-[11px] text-body/35 tracking-wider">
            &copy; 2026 {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="font-heading text-[11px] text-body/35 tracking-wider">
            Rafaela, Santa Fe, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
