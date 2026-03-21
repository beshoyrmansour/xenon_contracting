"use client";

import { useTranslations } from "next-intl";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FadeInUp } from "@/components/ScrollReveal";

const stats = [
  { target: 14, suffix: "+", key: "years" },
  { target: 50, suffix: "+", key: "projects" },
  { target: 10, suffix: "", key: "disciplines" },
  { target: 20, suffix: "+", key: "brands" },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map(({ target, suffix, key }, idx) => (
              <div key={key} className="text-center relative">
                <div className="stat-number mb-3">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <div className="accent-divider mx-auto max-w-[80px]" />
                <p className="text-sm sm:text-base text-white/80 mt-3 font-medium uppercase tracking-wider">
                  {t(key)}
                </p>
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-16 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
