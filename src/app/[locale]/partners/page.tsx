"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import Image from "next/image";
import { Award, ShieldCheck, Globe, BadgeCheck, ExternalLink } from "lucide-react";
import { brandLogoMap, brandUrlMap } from "@/data/brands";

// Flat, uncategorized brand list. Brands that previously spanned multiple
// categories are listed once with their specs merged.
const brands = [
  { name: "Hochiki", origin: "UK/Japan", spec: "Addressable Fire Alarm Systems" },
  {
    name: "Honeywell",
    origin: "USA",
    spec: "Fire alarm, CCTV, intrusion & access control systems",
  },
  { name: "Apollo", origin: "UK", spec: "Fire detection" },
  { name: "Simplex", origin: "USA", spec: "Fire alarm systems" },
  {
    name: "TYCO",
    origin: "Global",
    spec: "Firefighting & gas suppression systems",
  },
  {
    name: "Kidde",
    origin: "USA",
    spec: "Fire, gas & kitchen suppression (FM200, CO2)",
  },
  { name: "Giacomini", origin: "Italy", spec: "Firefighting equipment" },
  { name: "Kennedy", origin: "USA", spec: "Fire hydrants & valves" },
  { name: "VIKING", origin: "USA", spec: "Fire sprinkler & suppression systems" },
  { name: "Reliable", origin: "USA", spec: "Fire sprinkler systems" },
  { name: "Grundfos", origin: "Denmark", spec: "Firefighting pumps" },
  { name: "Aurora", origin: "USA", spec: "Firefighting pumps (UL/FM)" },
  { name: "Fairbanks Morse", origin: "USA", spec: "Firefighting pumps" },
  { name: "Patterson", origin: "USA", spec: "Firefighting pumps" },
  { name: "Peerless", origin: "USA", spec: "Firefighting pumps" },
  { name: "Watex", origin: "Regional", spec: "Firefighting pumps" },
  {
    name: "Hikvision",
    origin: "China",
    spec: "CCTV, video surveillance & access control",
  },
  { name: "SAMSUNG", origin: "South Korea", spec: "CCTV surveillance cameras" },
  {
    name: "TOA",
    origin: "Japan",
    spec: "Public address, paging, video conferencing",
  },
  {
    name: "JD-Media",
    origin: "South Korea",
    spec: "Public address systems, paging units",
  },
  { name: "Farfisa", origin: "Italy", spec: "Intercom systems" },
  { name: "Teletek Electronics", origin: "Europe", spec: "Intrusion Alarm Systems" },
  { name: "TEXECOM", origin: "UK", spec: "Intrusion alarm systems" },
  { name: "HID Global", origin: "USA", spec: "Access control systems" },
  { name: "ANSUL", origin: "USA", spec: "Gas & special hazard suppression" },
  { name: "LPG", origin: "Global", spec: "Gas suppression systems" },
  { name: "BUCKEYE", origin: "USA", spec: "Kitchen hood fire suppression" },
  { name: "NAFFCO", origin: "UAE", spec: "Firefighting & kitchen suppression" },
  { name: "Intercall", origin: "UK", spec: "Nurse call systems" },
];

const whyBrands = [
  { key: "genuine", icon: BadgeCheck },
  { key: "intlStandards", icon: Globe },
  { key: "warranty", icon: ShieldCheck },
];

export default function PartnersPage() {
  const t = useTranslations("brands");

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />

        {/* IBC Highlight */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="glass-card rounded-2xl border-2 border-secondary/20 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4">
                  {t("ibcTitle")}
                </h2>
                <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
                  {t("ibcDescription")}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* All Brands */}
        <section className="py-12 sm:py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.map((brand) => {
                const href = brandUrlMap[brand.name];
                const content = (
                  <>
                    {/* Logo slot — always reserved so names align across the row */}
                    <div className="h-[52px] flex items-center justify-center mb-4">
                      {brandLogoMap[brand.name] && (
                        <Image
                          src={brandLogoMap[brand.name]}
                          alt={brand.name}
                          width={140}
                          height={52}
                          className="w-auto max-h-[48px] object-contain"
                        />
                      )}
                    </div>
                    <h4 className="font-semibold text-text-dark flex items-center gap-1.5">
                      {brand.name}
                      {href && (
                        <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-secondary transition-colors" />
                      )}
                    </h4>
                    <span className="mt-1.5 text-xs px-2 py-0.5 bg-light rounded-full text-text-muted">
                      {brand.origin}
                    </span>
                    <p className="mt-3 text-sm text-text-muted">{brand.spec}</p>
                  </>
                );
                const cardClass =
                  "group glass-card p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all duration-300 h-full flex flex-col items-center text-center";

                return (
                  <FadeInUp key={brand.name}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cardClass}>{content}</div>
                    )}
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why International Brands */}
        <section className="py-12 sm:py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {t("whyTitle")}
              </h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyBrands.map(({ key, icon: Icon }) => (
                <StaggerItem key={key}>
                  <div className="text-center p-6 rounded-xl glass-card-dark hover:border-secondary/50 transition-all duration-300 hover:bg-white/10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(key)}
                    </h3>
                    <p className="text-sm text-gray-300">{t(`${key}Desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
