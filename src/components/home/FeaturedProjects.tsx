"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import {
  Landmark,
  Heart,
  Factory,
  Trophy,
  GraduationCap,
  ShoppingBag,
  MapPin,
  ArrowRight,
  Building2,
  Download,
} from "lucide-react";
import { FadeInUp } from "@/components/ScrollReveal";
import LogoWatermark from "@/components/LogoWatermark";

const sectorIcons: Record<string, typeof Landmark> = {
  banking: Landmark,
  healthcare: Heart,
  industrial: Factory,
  sports: Trophy,
  education: GraduationCap,
  commercial: ShoppingBag,
};

interface FeaturedProject {
  nameEn: string;
  nameAr: string;
  sector: string;
  location: string;
  locationAr: string;
}

const featured: FeaturedProject[] = [
  { nameEn: "National Bank of Egypt", nameAr: "البنك الاهلي المصري", sector: "banking", location: "Minya", locationAr: "المنيا" },
  { nameEn: "Police Hospital — Alexandria", nameAr: "مستشفى الشرطة", sector: "healthcare", location: "Alexandria", locationAr: "الإسكندرية" },
  { nameEn: "Multex Egypt Factory", nameAr: "مصنع ميلتكس ايجيبت", sector: "industrial", location: "October City", locationAr: "أكتوبر" },
  { nameEn: "Wadi Degla Club — Maadi", nameAr: "نادي وادي دجلة", sector: "sports", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Imam Mall", nameAr: "مول الامام", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Nile Language School", nameAr: "مدرسة النيل للغات", sector: "education", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Cairo Bank", nameAr: "بنك القاهرة", sector: "banking", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Good Shepherd Hospital", nameAr: "مستشفى الراعي الصالح", sector: "healthcare", location: "Cairo", locationAr: "القاهرة" },
];

const sectors = ["all", "banking", "healthcare", "industrial", "sports", "commercial", "education"];

const stats = [
  { value: "14+", labelKey: "years" },
  { value: "50+", labelKey: "projects" },
  { value: "10", labelKey: "disciplines" },
  { value: "20+", labelKey: "brands" },
];

export default function FeaturedProjects() {
  const t = useTranslations("portfolio");
  const ts = useTranslations("stats");
  const locale = useLocale();
  const [activeSector, setActiveSector] = useState("all");

  const filtered =
    activeSector === "all"
      ? featured
      : featured.filter((p) => p.sector === activeSector);

  return (
    <section className="py-20 sm:py-28 bg-light relative overflow-hidden">
      <LogoWatermark
        variant="dark"
        opacity={0.025}
        size="w-[450px] h-[450px]"
        position="absolute -left-16 -bottom-16"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            {t("title")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            {t("subtitle")}
          </h2>
        </FadeInUp>

        {/* Stats row — simple inline numbers */}
        <FadeInUp>
          <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-6 mb-16">
            {stats.map((s) => (
              <div key={s.labelKey} className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">{s.value}</span>
                <p className="text-sm text-gray-500 mt-1">{ts(s.labelKey)}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Sector filter — minimal pills */}
        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sectors.map((sector) => {
              const isActive = activeSector === sector;
              return (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {sector === "all"
                    ? locale === "ar" ? "الكل" : "All"
                    : t(sector)}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Project list — clean cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {filtered.map((project, idx) => {
            const Icon = sectorIcons[project.sector] || Factory;
            return (
              <FadeInUp key={`${project.nameEn}-${idx}`} delay={idx * 0.04}>
                <div className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {t(project.sector)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-dark text-[15px] leading-snug mb-2">
                    {locale === "ar" ? project.nameAr : project.nameEn}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    {locale === "ar" ? project.locationAr : project.location}
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* CTAs */}
        <FadeInUp className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/xenon-portfolio.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-white font-semibold rounded-xl text-sm hover:bg-dark/85 transition-colors"
          >
            <Download className="w-4 h-4" />
            {t("downloadPortfolio")}
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
