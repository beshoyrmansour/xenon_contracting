"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeInUp } from "@/components/ScrollReveal";

// `logo` is optional — brands without a logo file render their name as text.
const brands: { name: string; logo?: string }[] = [
  { name: "Honeywell", logo: "/brands/honeywell.svg" },
  { name: "Hochiki", logo: "/brands/hochikiamerica.png" },
  { name: "TYCO", logo: "/brands/tyco.svg" },
  { name: "TOA", logo: "/brands/toa.png" },
  { name: "Farfisa", logo: "/brands/farfisa.svg" },
  { name: "Teletek", logo: "/brands/teletek.svg" },
  { name: "JD-Media", logo: "/brands/jdm.png" },
  { name: "Grundfos", logo: "/brands/grundfos.svg" },
  { name: "Apollo", logo: "/brands/apollo.svg" },
  { name: "Simplex", logo: "/brands/simplex.avif" },
  { name: "Kidde", logo: "/brands/kidde.png" },
  { name: "Giacomini", logo: "/brands/giacomini.svg" },
  { name: "Aurora", logo: "/brands/aurora.svg" },
  { name: "LPG", logo: "/brands/lpg.png" },
  { name: "HID Global", logo: "/brands/hid.png" },
  { name: "VIKING", logo: "/brands/viking.png" },
  { name: "Kennedy", logo: "/brands/kennedy.png" },
  { name: "ANSUL", logo: "/brands/ansul.png" },
  { name: "NAFFCO", logo: "/brands/naffco.png" },
  { name: "BUCKEYE", logo: "/brands/buckeye.png" },
  { name: "Hikvision", logo: "/brands/hikvision.svg" },
  { name: "SAMSUNG", logo: "/brands/samsung.svg" },
  { name: "Reliable", logo: "/brands/reliablesprinkler.svg" },
  { name: "TEXECOM", logo: "/brands/texecom.png" },
  { name: "Intercall", logo: "/brands/intercall-logo.svg" },
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
      </div>

      {/* Auto-scrolling carousel — full-bleed (edge to edge), forced LTR so the
          marquee behaves the same in both reading directions. */}
      <div className="relative overflow-hidden" dir="ltr">
          <div className="flex w-max animate-scroll py-6 sm:py-8">
            {/* Two identical copies tile seamlessly: the track is animated
                from 0 to -50%, which is exactly one copy's width. */}
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex flex-shrink-0 gap-4 sm:gap-8 pe-4 sm:pe-8"
              >
                {brands.map((brand, idx) => (
                  <div
                    key={idx}
                    tabIndex={copy === 0 ? 0 : -1}
                    aria-label={brand.name}
                    className="group relative overflow-hidden flex-shrink-0 flex items-start justify-center w-[150px] sm:w-[180px] h-[80px] sm:h-[96px] bg-light rounded-xl px-3 sm:px-4 pt-3 sm:pt-4 grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary/10 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/30"
                  >
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={160}
                        height={64}
                        className="w-full max-h-12 sm:max-h-14 object-contain"
                      />
                    ) : (
                      <span className="text-sm sm:text-base font-bold text-text-muted text-center">
                        {brand.name}
                      </span>
                    )}
                    {/* Brand name label — slides up on hover/focus */}
                    {brand.logo && (
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 bg-dark/85 text-white text-[11px] font-semibold text-center py-1">
                        {brand.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
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
