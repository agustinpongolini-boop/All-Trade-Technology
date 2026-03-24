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
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg shadow-black/30 transition-colors duration-200">
        <MessageCircle size={26} className="text-white" />
      </span>
    </a>
  );
}
