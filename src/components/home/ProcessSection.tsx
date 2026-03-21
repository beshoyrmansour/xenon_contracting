"use client";

import { useTranslations } from "next-intl";
import {
  MessageSquare,
  Search,
  PenTool,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import LogoWatermark from "@/components/LogoWatermark";

const steps = [
  { key: "step1", icon: MessageSquare },
  { key: "step2", icon: Search },
  { key: "step3", icon: PenTool },
  { key: "step4", icon: Wrench },
  { key: "step5", icon: HeadphonesIcon },
];

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="py-16 sm:py-24 bg-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #B22222 0%, transparent 50%)`,
        }}
      />

      <LogoWatermark
        variant="light"
        opacity={0.03}
        size="w-[400px] h-[400px]"
        position="absolute -left-16 top-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 inline-block">{t("title")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            {t("subtitle") || t("title")}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {steps.map(({ key, icon: Icon }, idx) => (
            <StaggerItem key={key}>
              <div className="relative text-center group">
                {/* Connector line between steps (desktop only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-0 h-[2px] bg-gradient-to-r from-primary/40 to-primary/10 z-0" />
                )}

                {/* Step number + icon */}
                <div className="relative mx-auto mb-5 w-14 h-14">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white text-dark text-xs font-bold flex items-center justify-center ring-2 ring-dark">
                    {idx + 1}
                  </span>
                </div>

                {/* Text */}
                <div className="px-4">
                  <h3 className="font-bold text-white text-sm mb-2">
                    {t(key)}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {t(`${key}Desc`)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
