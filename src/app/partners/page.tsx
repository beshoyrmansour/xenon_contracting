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
import { Award, ShieldCheck, Globe, BadgeCheck } from "lucide-react";

const brandLogoMap: Record<string, string> = {
  Honeywell: "/brands/honeywell.svg",
  Hochiki: "/brands/hochiki.svg",
  TYCO: "/brands/tyco.svg",
  TOA: "/brands/toa.svg",
  Farfisa: "/brands/farfisa.svg",
  "Teletek Electronics": "/brands/teletek.svg",
  "JD-Media": "/brands/jd-media.svg",
  EiD: "/brands/eid.svg",
  Grundfos: "/brands/grundfos.svg",
  Apollo: "/brands/apollo.svg",
  Simplex: "/brands/simplex.svg",
  Kidde: "/brands/kidde.svg",
  Giacomini: "/brands/giacomini.svg",
  Aurora: "/brands/aurora.svg",
  "iiD / iiD 2 Secure": "/brands/iid.svg",
  "Fire Products": "/brands/fire-products.svg",
  "Fairbanks Morse": "/brands/fairbanks-morse.svg",
  Patterson: "/brands/patterson.svg",
  Peerless: "/brands/peerless.svg",
  Watex: "/brands/watex.svg",
};

const brandCategories = [
  {
    key: "fireAlarm",
    brands: [
      {
        name: "Hochiki",
        origin: "UK/Japan",
        spec: "Addressable Fire Alarm Systems",
      },
      {
        name: "Fire Products",
        origin: "UK",
        spec: "Conventional Fire Alarm Systems",
      },
      { name: "Honeywell", origin: "USA", spec: "Fire alarm systems" },
      { name: "Apollo", origin: "UK", spec: "Fire detection" },
      { name: "Simplex", origin: "USA", spec: "Fire alarm systems" },
    ],
  },
  {
    key: "firefighting",
    brands: [
      {
        name: "TYCO",
        origin: "Global",
        spec: "Firefighting and suppression systems",
      },
      { name: "Kidde", origin: "USA", spec: "Fire suppression (FM200, CO2)" },
      { name: "Giacomini", origin: "Italy", spec: "Firefighting equipment" },
    ],
  },
  {
    key: "pumps",
    brands: [
      { name: "Grundfos", origin: "Denmark", spec: "Firefighting pumps" },
      { name: "Aurora", origin: "USA", spec: "Firefighting pumps (UL/FM)" },
      { name: "Fairbanks Morse", origin: "USA", spec: "Firefighting pumps" },
      { name: "Patterson", origin: "USA", spec: "Firefighting pumps" },
      { name: "Peerless", origin: "USA", spec: "Firefighting pumps" },
      { name: "Watex", origin: "Regional", spec: "Firefighting pumps" },
    ],
  },
  {
    key: "cctvSurveillance",
    brands: [
      {
        name: "iiD / iiD 2 Secure",
        origin: "Spain",
        spec: "CCTV surveillance and video transmission",
      },
      {
        name: "Farfisa",
        origin: "Italy",
        spec: "Intercom and CCTV surveillance",
      },
    ],
  },
  {
    key: "publicAddress",
    brands: [
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
    ],
  },
  {
    key: "intrusionAlarm",
    brands: [
      {
        name: "Teletek Electronics",
        origin: "Europe",
        spec: "Intrusion Alarm Systems",
      },
    ],
  },
  {
    key: "accessControl",
    brands: [
      {
        name: "EiD",
        origin: "USA/Malaysia",
        spec: "Access control and attendance tracking",
      },
    ],
  },
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

        {/* Brands by Category */}
        <section className="py-12 sm:py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {brandCategories.map((cat, catIdx) => (
              <FadeInUp key={cat.key} delay={catIdx * 0.05}>
                <div className="mb-12 last:mb-0">
                  <h3 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-secondary rounded-full" />
                    {t(cat.key)}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.brands.map((brand) => (
                      <div
                        key={brand.name}
                        className="glass-card p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          {brandLogoMap[brand.name] && (
                            <div className="w-[100px] h-[40px] flex items-center justify-center flex-shrink-0">
                              <Image
                                src={brandLogoMap[brand.name]}
                                alt={brand.name}
                                width={100}
                                height={40}
                                className="w-auto h-[32px] object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-text-dark truncate">
                                {brand.name}
                              </h4>
                              <span className="text-xs px-2 py-0.5 bg-light rounded-full text-text-muted flex-shrink-0 ms-2">
                                {brand.origin}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-text-muted">{brand.spec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
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
