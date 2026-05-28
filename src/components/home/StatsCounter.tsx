"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FadeInUp } from "@/components/ScrollReveal";

const statsConfig = [
  { key: "years", value: 14, suffix: "+" },
  { key: "projects", value: 150, suffix: "+" },
  { key: "disciplines", value: 10, suffix: "" },
  { key: "brands", value: 20, suffix: "+" },
];

export default function StatsCounter() {
  const t = useTranslations("stats");
  const [counts, setCounts] = useState<Record<string, number>>({
    years: 0,
    projects: 0,
    disciplines: 0,
    brands: 0,
  });

  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve for smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);

      const newCounts: Record<string, number> = {};
      statsConfig.forEach((stat) => {
        newCounts[stat.key] = Math.floor(stat.value * eased);
      });
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values are exact
        const final: Record<string, number> = {};
        statsConfig.forEach((s) => (final[s.key] = s.value));
        setCounts(final);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted]);

  return (
    <div ref={ref} className="mb-14">
      <FadeInUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsConfig.map((stat) => (
            <div
              key={stat.key}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 px-4 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-baseline justify-center mb-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tabular-nums">
                  {counts[stat.key]}
                </span>
                {stat.suffix && (
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary ml-0.5">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-white/80 text-xs sm:text-sm">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </FadeInUp>
    </div>
  );
}
