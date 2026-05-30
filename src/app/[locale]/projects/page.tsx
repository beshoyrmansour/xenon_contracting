"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FadeInUp } from "@/components/ScrollReveal";
import { projects, sectorCounts, type ProjectSector } from "@/data/projects";
import {
  Landmark,
  Heart,
  Factory,
  Trophy,
  GraduationCap,
  ShoppingBag,
  Car,
  Cpu,
  MapPin,
  MoreHorizontal,
  Download,
  ChevronRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LogoWatermark from "@/components/LogoWatermark";

const sectorIcons: Record<ProjectSector, typeof Landmark> = {
  banking: Landmark,
  healthcare: Heart,
  industrial: Factory,
  sports: Trophy,
  education: GraduationCap,
  commercial: ShoppingBag,
  automotive: Car,
  technology: Cpu,
  other: MoreHorizontal,
};

const sectors: ProjectSector[] = [
  "banking",
  "sports",
  "healthcare",
  "industrial",
  "commercial",
  "automotive",
  "education",
  "technology",
  "other",
];

const cities = [
  { city: "Cairo", cityAr: "القاهرة" },
  { city: "Alexandria", cityAr: "الإسكندرية" },
  { city: "October City", cityAr: "مدينة أكتوبر" },
  { city: "Damietta", cityAr: "دمياط" },
  { city: "Banha", cityAr: "بنها" },
  { city: "Maadi", cityAr: "المعادي" },
  { city: "Minya", cityAr: "المنيا" },
];

export default function ProjectsPage() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [filter, setFilter] = useState<ProjectSector | "all">("all");
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleFilter = (sector: ProjectSector | "all") => {
    setFilter(sector);
    setLocationFilter(null);
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleLocationFilter = (city: string) => {
    setLocationFilter((prev) => (prev === city ? null : city));
    setFilter("all");
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const cityCounts: Record<string, number> = {};
  for (const p of projects) {
    cityCounts[p.location] = (cityCounts[p.location] || 0) + 1;
  }

  const filtered = projects.filter((p) => {
    if (locationFilter) return p.location === locationFilter;
    if (filter === "all") return true;
    return p.sector === filter;
  });

  const activeLabel = locationFilter
    ? locale === "ar"
      ? cities.find((c) => c.city === locationFilter)?.cityAr
      : locationFilter
    : filter !== "all"
      ? t(filter)
      : null;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Page Header */}
        <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-2">
                    {t("title")}
                  </h1>
                  <p className="text-base text-gray-500">{t("subtitle")}</p>
                </div>
                <a
                  href="/xenon-portfolio.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A2E] text-white font-medium rounded-lg text-sm hover:bg-[#1A1A2E]/85 transition-colors shrink-0 self-start sm:self-auto"
                >
                  <Download className="w-4 h-4" />
                  {t("downloadPortfolio")}
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="py-3 bg-white sticky top-[52px] sm:top-[56px] z-20 border-b border-gray-100 shadow-sm">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center gap-2 pb-1 w-max mx-auto">
              <button
                onClick={() => handleFilter("all")}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === "all" && !locationFilter
                    ? "bg-[#1A1A2E] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t("all")}
                <span className="ml-1.5 text-xs opacity-70">
                  {projects.length}
                </span>
              </button>
              {sectors
                .filter((s) => sectorCounts[s])
                .map((sector) => {
                  const count = sectorCounts[sector] || 0;
                  const isActive = filter === sector && !locationFilter;
                  return (
                    <button
                      key={sector}
                      onClick={() => handleFilter(sector)}
                      className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#1A1A2E] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {t(sector)}
                      <span className="ml-1.5 text-xs opacity-70">{count}</span>
                    </button>
                  );
                })}

              {/* Divider */}
              <span className="shrink-0 w-px h-5 bg-gray-200 mx-1" />

              {/* City pills */}
              {cities.map(({ city, cityAr }) => {
                const count = cityCounts[city] || 0;
                if (!count) return null;
                const isActive = locationFilter === city;
                return (
                  <button
                    key={city}
                    onClick={() => handleLocationFilter(city)}
                    className={`shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#B22222] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    {locale === "ar" ? cityAr : city}
                    <span className="text-xs opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results count */}
        <section ref={listRef} className="pt-6 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-400">
              {locale === "ar" ? "عرض" : "Showing"}{" "}
              <span className="text-[#1A1A2E] font-semibold">
                {filtered.length}
              </span>{" "}
              {locale === "ar" ? "مشروع" : "projects"}
              {activeLabel && (
                <>
                  {" "}
                  {locale === "ar" ? "في" : "in"}{" "}
                  <span className="text-[#1A1A2E] font-semibold">
                    {activeLabel}
                  </span>
                </>
              )}
            </p>
          </div>
        </section>

        {/* Project List */}
        <section className="py-4 pb-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${locationFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="divide-y divide-gray-100"
              >
                {filtered.map((project, idx) => {
                  const Icon = sectorIcons[project.sector];
                  return (
                    <motion.div
                      key={`${project.nameEn}-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: Math.min(idx * 0.015, 0.4) }}
                      className="group flex items-center gap-3 sm:gap-4 py-3.5 sm:py-4 hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
                    >
                      {/* Sector icon */}
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#B22222]/10 transition-colors">
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#B22222] transition-colors" />
                      </div>

                      {/* Name & via */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#1A1A2E] text-sm truncate">
                          {locale === "ar" ? project.nameAr : project.nameEn}
                        </p>
                        {project.via && (
                          <p className="text-xs text-gray-400 truncate mt-0.5">
                            {locale === "ar" ? "عبر" : "via"} {project.via}
                          </p>
                        )}
                      </div>

                      {/* Sector tag */}
                      <span className="hidden sm:inline-block shrink-0 px-2.5 py-0.5 rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                        {t(project.sector)}
                      </span>

                      {/* Location */}
                      <div className="shrink-0 flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">
                          {locale === "ar"
                            ? project.locationAr
                            : project.location}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400">
                  {locale === "ar" ? "لا توجد مشاريع" : "No projects found"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Coverage Across Egypt */}
        <section className="py-12 sm:py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
          <LogoWatermark
            variant="dark"
            opacity={0.025}
            size="w-[400px] h-[400px]"
            position="absolute -right-16 -bottom-16"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-12 text-center">
                {t("coverageTitle")}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {cities.map(({ city, cityAr }) => {
                  const count = cityCounts[city] || 0;
                  const isActive = locationFilter === city;
                  return (
                    <button
                      key={`cov-${city}`}
                      onClick={() => handleLocationFilter(city)}
                      className={`rounded-xl p-4 sm:p-6 text-center transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#1A1A2E] shadow-lg shadow-[#1A1A2E]/20"
                          : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md"
                      }`}
                    >
                      <MapPin className="w-5 h-5 mx-auto mb-3 text-[#B22222]" />
                      <p
                        className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-[#1A1A2E]"}`}
                      >
                        {locale === "ar" ? cityAr : city}
                      </p>
                      <p
                        className={`text-xs font-medium ${isActive ? "text-white/70" : "text-[#B22222]"}`}
                      >
                        {count}{" "}
                        {count === 1
                          ? locale === "ar"
                            ? "مشروع"
                            : "Project"
                          : locale === "ar"
                            ? "مشروع"
                            : "Projects"}
                      </p>
                    </button>
                  );
                })}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 sm:py-16 bg-[#1A1A2E] relative overflow-hidden">
          <LogoWatermark
            variant="light"
            opacity={0.035}
            size="w-[350px] h-[350px]"
            position="absolute -left-12 -top-12"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t("successStory")}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#B22222] text-white font-bold rounded-lg hover:bg-[#9a1a1a] transition-colors"
            >
              {t("requestQuote")}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
