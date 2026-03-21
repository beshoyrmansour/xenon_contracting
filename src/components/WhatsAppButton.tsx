"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const message = encodeURIComponent(t("message"));

  return (
    <a
      href={`https://wa.me/201221715027?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 bg-whatsapp text-white p-3.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group"
      aria-label="Contact us on WhatsApp"
      style={{ width: "auto", height: "auto" }}
    >
      <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" />
      <span className="absolute bottom-full mb-2 right-0 bg-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp
      </span>
    </a>
  );
}
