import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Company */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="font-heading font-extrabold text-[11px] text-white leading-none">
                  AT
                </span>
              </div>
              <span className="font-heading font-semibold text-xs tracking-[0.18em] uppercase text-white">
                All Trade Technology
              </span>
            </div>
            <p className="font-body text-[13px] text-[#666] leading-relaxed">
              Eliminamos los obstáculos entre tu producto y el mundo. Tecnología
              y logística propia para importar sin fricción.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#555] mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicios"
                    className="font-heading text-[13px] text-[#888] hover:text-accent transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Office */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#555] mb-5">
              Oficina
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent/60 shrink-0 mt-0.5" />
                <span className="font-heading text-[13px] text-[#888] leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-accent/60 shrink-0 mt-0.5" />
                <span className="font-heading text-[13px] text-[#888]">
                  {COMPANY.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#555] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent/60 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-heading text-[13px] text-[#888] hover:text-accent transition-colors duration-200"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent/60 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="font-heading text-[13px] text-[#888] hover:text-accent transition-colors duration-200"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-heading text-[11px] text-[#444] tracking-wider">
            &copy; 2026 {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="font-heading text-[11px] text-[#444] tracking-wider">
            Rafaela, Santa Fe, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
