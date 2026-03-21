"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Clock, Globe, Phone } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

const items = [
  { key: "licensed", icon: ShieldCheck },
  { key: "experience", icon: Clock },
  { key: "standards", icon: Globe },
  { key: "support", icon: Phone },
];

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="py-16 sm:py-24 bg-dark relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, #B22222 0%, transparent 40%),
                           radial-gradient(circle at 90% 80%, #DAA520 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            {t("title")}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ key, icon: Icon }) => (
            <StaggerItem key={key}>
              <div className="text-center group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                {/* Circular red icon like Comatrol */}
                <div className="accent-circle-icon mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                {/* Divider line */}
                <div className="w-full h-px bg-white/10 mb-5" />
                <h3 className="text-lg font-bold text-white mb-3">{t(key)}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
