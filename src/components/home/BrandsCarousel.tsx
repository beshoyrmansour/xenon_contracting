"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeInUp } from "@/components/ScrollReveal";

// `logo` is optional — brands without a logo file render their name as text.
const brands: { name: string; logo?: string }[] = [
  { name: "Honeywell", logo: "/brands/honeywell.svg" },
  { name: "Hochiki", logo: "/brands/hochiki.svg" },
  { name: "TYCO", logo: "/brands/tyco.svg" },
  { name: "TOA", logo: "/brands/toa.svg" },
  { name: "Farfisa", logo: "/brands/farfisa.svg" },
  { name: "Teletek", logo: "/brands/teletek.svg" },
  { name: "JD-Media", logo: "/brands/jd-media.svg" },
  { name: "Grundfos", logo: "/brands/grundfos.svg" },
  { name: "Apollo", logo: "/brands/apollo.svg" },
  { name: "Simplex", logo: "/brands/simplex.svg" },
  { name: "Kidde", logo: "/brands/kidde.svg" },
  { name: "Giacomini", logo: "/brands/giacomini.svg" },
  { name: "Aurora", logo: "/brands/aurora.svg" },
  { name: "Hikvision" },
  { name: "SAMSUNG" },
  { name: "HID Global" },
  { name: "TEXECOM" },
  { name: "VIKING" },
  { name: "Reliable" },
  { name: "Kennedy" },
  { name: "ANSUL" },
  { name: "NAFFCO" },
  { name: "BUCKEYE" },
  { name: "Intercall" },
];

export default function BrandsCarousel() {
  const t = useTranslations("brands");

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-10">
          <span className="section-label mb-4 inline-block">{t("title")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-4 mb-4">
            {t("title")}
          </h2>
          <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full">
            {t("ibcBadge")}
          </span>
        </FadeInUp>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-4 sm:gap-8 py-6 sm:py-8">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-[130px] sm:w-[160px] h-[60px] sm:h-[70px] bg-light rounded-xl px-3 sm:px-4 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary/10"
              >
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className="w-auto h-9 object-contain"
                  />
                ) : (
                  <span className="text-sm sm:text-base font-bold text-text-muted text-center">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        [dir="rtl"] .animate-scroll {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
}
