"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Landmark,
  Heart,
  Factory,
  Trophy,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { sectorCounts } from "@/data/projects";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

const sectors = [
  { key: "banking", icon: Landmark, count: sectorCounts.banking || 0 },
  { key: "healthcare", icon: Heart, count: sectorCounts.healthcare || 0 },
  { key: "industrial", icon: Factory, count: sectorCounts.industrial || 0 },
  { key: "sports", icon: Trophy, count: sectorCounts.sports || 0 },
  { key: "education", icon: GraduationCap, count: sectorCounts.education || 0 },
  { key: "commercial", icon: ShoppingBag, count: sectorCounts.commercial || 0 },
];

export default function SectorsGrid() {
  const t = useTranslations("sectors");
  const tp = useTranslations("portfolio");

  return (
    <section className="py-16 sm:py-24 bg-dark relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, #DAA520 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            {t("title")}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map(({ key, icon: Icon, count }) => (
            <StaggerItem key={key}>
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {tp(key)}
                    </h3>
                    <span className="text-secondary font-bold text-sm">
                      {count} Projects
                    </span>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10 my-4" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all projects CTA */}
        <FadeInUp className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/15 text-white font-semibold rounded-xl text-sm hover:bg-primary hover:border-primary transition-all duration-200"
          >
            {tp("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
