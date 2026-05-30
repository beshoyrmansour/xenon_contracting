"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  Landmark,
  Heart,
  Factory,
  Trophy,
  GraduationCap,
  ShoppingBag,
  Car,
  MapPin,
  ArrowRight,
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
  automotive: Car,
};

interface FeaturedProject {
  nameEn: string;
  nameAr: string;
  sector: string;
  location: string;
  locationAr: string;
  logo?: string;
}

const featured: FeaturedProject[] = [
  {
    nameEn: "National Bank of Egypt",
    nameAr: "البنك الاهلي المصري",
    sector: "banking",
    location: "Minya",
    locationAr: "المنيا",
    logo: "/clients/og/nbe.png",
  },
  {
    nameEn: "Banque du Caire",
    nameAr: "بنك القاهرة",
    sector: "banking",
    location: "Cairo",
    locationAr: "القاهرة",
    logo: "/clients/og/banque-du-caire.png",
  },
  {
    nameEn: "ALEXBANK",
    nameAr: "بنك الإسكندرية",
    sector: "banking",
    location: "Alexandria",
    locationAr: "الإسكندرية",
    logo: "/clients/og/alexbank.png",
  },
  {
    nameEn: "Ahli United Bank",
    nameAr: "البنك الأهلي المتحد",
    sector: "banking",
    location: "Cairo",
    locationAr: "القاهرة",
    logo: "/clients/og/ahli-united-bank.png",
  },
  {
    nameEn: "Good Shepherd Hospital",
    nameAr: "مستشفى الراعي الصالح",
    sector: "healthcare",
    location: "Cairo",
    locationAr: "القاهرة",
    logo: "/clients/og/good-shepherd.png",
  },
  {
    nameEn: "Police Hospital — Alexandria",
    nameAr: "مستشفى الشرطة",
    sector: "healthcare",
    location: "Alexandria",
    locationAr: "الإسكندرية",
    logo: "/clients/og/police-hospital.png",
  },
  {
    nameEn: "Milteks Textile Egypt",
    nameAr: "مصنع ميلتكس ايجيبت",
    sector: "industrial",
    location: "October City",
    locationAr: "أكتوبر",
    logo: "/clients/og/milteks.png",
  },
  {
    nameEn: "Wadi Degla Club",
    nameAr: "نادي وادي دجلة",
    sector: "sports",
    location: "Cairo",
    locationAr: "القاهرة",
    logo: "/clients/og/wadi-degla.png",
  },
  {
    nameEn: "BYD Car Service Center",
    nameAr: "مركز خدمة سيارات BYD",
    sector: "automotive",
    location: "Cairo",
    locationAr: "القاهرة",
    logo: "/clients/og/BYD.png",
  },
];

const sectors = [
  "all",
  "banking",
  "healthcare",
  "industrial",
  "sports",
  "automotive",
];

const stats = [
  { value: "14+", labelKey: "years" },
  { value: "150+", labelKey: "projects" },
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
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
                  {s.value}
                </span>
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
                    ? locale === "ar"
                      ? "الكل"
                      : "All"
                    : t(sector)}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Project list — clean cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filtered.map((project, idx) => {
            const Icon = sectorIcons[project.sector] || Factory;
            return (
              <FadeInUp key={`${project.nameEn}-${idx}`} delay={idx * 0.04}>
                <div className="group h-full flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-32 flex items-center justify-center px-6 bg-linear-to-b from-gray-50/80 to-white border-b border-gray-100">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={locale === "ar" ? project.nameAr : project.nameEn}
                        width={220}
                        height={88}
                        className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        {t(project.sector)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-dark text-base leading-snug mb-2">
                      {locale === "ar" ? project.nameAr : project.nameEn}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-auto">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {locale === "ar" ? project.locationAr : project.location}
                    </div>
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
