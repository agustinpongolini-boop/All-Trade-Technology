import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5493492630909?text=Hola,%20quiero%20cotizar%20una%20operación";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed z-[9999] bottom-6 right-6 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

      {/* Button — glass over WhatsApp green */}
      <span
        className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-y-[-1px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(60,219,128,0.95) 0%, rgba(37,211,102,0.78) 100%)",
          backdropFilter: "blur(12px) saturate(160%)",
          WebkitBackdropFilter: "blur(12px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(0,0,0,0.18), 0 12px 32px -8px rgba(37,211,102,0.45), 0 4px 12px -2px rgba(37,211,102,0.25)",
        }}
      >
        <MessageCircle size={26} className="text-white" />
      </span>
    </a>
  );
}
