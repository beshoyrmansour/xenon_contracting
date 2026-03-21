"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import LogoWatermark from "@/components/LogoWatermark";

export default function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section className="py-16 sm:py-24 bg-light relative overflow-hidden">
      <LogoWatermark
        variant="dark"
        opacity={0.03}
        size="w-[500px] h-[500px]"
        position="absolute -right-24 -top-24"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <span className="section-label mb-4 inline-block">{t("title")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-4">
            {t("subtitle")}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.key}>
                <Link
                  href={`/services#${service.key}`}
                  className="group relative overflow-hidden rounded-2xl block h-[280px] sm:h-[320px]"
                >
                  <img
                    src={service.image}
                    alt={t(service.key)}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-primary/90 group-hover:via-primary/30 group-hover:to-transparent transition-all duration-300" />
                  {/* Content */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <h3 className="font-bold text-white text-lg sm:text-xl drop-shadow-md">
                        {t(service.key)}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2 leading-relaxed drop-shadow-sm">
                      {t(`${service.key}Desc`)}
                    </p>
                    <span className="text-sm font-semibold text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all drop-shadow-sm">
                      {t("learnMore") || "Learn More"}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
