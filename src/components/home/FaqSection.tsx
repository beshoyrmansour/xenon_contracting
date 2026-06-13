"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeInUp } from "@/components/ScrollReveal";
import LogoWatermark from "@/components/LogoWatermark";

// Question/answer keys live in the `faq` namespace (messages/{en,ar}.json).
const FAQ_KEYS = ["1", "2", "3", "4", "5", "6"] as const;

export default function FaqSection() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("1");

  // Build FAQPage structured data from the same translated copy that renders
  // on screen, so the markup and schema never drift apart.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((k) => ({
      "@type": "Question",
      name: t(`q${k}`),
      acceptedAnswer: { "@type": "Answer", text: t(`a${k}`) },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <LogoWatermark
        variant="dark"
        opacity={0.03}
        size="w-[500px] h-[500px]"
        position="absolute -left-24 -bottom-24"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-12">
          <span className="section-label mb-4 inline-block">{t("title")}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mt-4">
            {t("subtitle")}
          </h2>
        </FadeInUp>

        <FadeInUp>
          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-light/40">
            {FAQ_KEYS.map((k) => {
              const isOpen = open === k;
              return (
                <div key={k}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : k)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-start"
                    >
                      <span className="font-semibold text-text-dark text-base sm:text-lg">
                        {t(`q${k}`)}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 text-text-muted leading-relaxed">
                        {t(`a${k}`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
