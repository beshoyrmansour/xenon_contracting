"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { FadeInUp } from "@/components/ScrollReveal";
import LogoWatermark from "@/components/LogoWatermark";

export default function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 40%),
                             radial-gradient(circle at 80% 50%, #1A1A2E 0%, transparent 50%)`,
          }}
        />
      </div>

      <LogoWatermark
        variant="light"
        opacity={0.04}
        size="w-[450px] h-[450px]"
        position="absolute -right-12 -top-12"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            {t("headline")}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-light transition-colors"
            >
              {t("requestQuote")}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+201221715027"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t("callUs")}
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
