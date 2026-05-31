"use client";

import { useTranslations, useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import { FadeInUp } from "@/components/ScrollReveal";
import { services } from "@/data/services";
import {
  Landmark,
  Heart,
  Factory,
  Trophy,
  GraduationCap,
  ShoppingBag,
  Cpu,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Flame,
  Camera,
  Lock,
  Droplets,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";

const industryIcons: Record<string, typeof Landmark> = {
  banking: Landmark,
  healthcare: Heart,
  industrial: Factory,
  sports: Trophy,
  education: GraduationCap,
  commercial: ShoppingBag,
  technology: Cpu,
};

export default function ServicesPage() {
  const t = useTranslations("services");
  const tp = useTranslations("portfolio");
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<string>(services[0]?.key || "");

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" },
    );

    services.forEach((service) => {
      const el = document.getElementById(service.key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={t("title")} subtitle={t("pageSubtitle")} />

        {/* Sticky navigation tabs — modernized */}
        <div className="sticky top-[52px] sm:top-[56px] z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex mt-4 gap-1 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8 w-max mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeTab === service.key;
                return (
                  <a
                    key={service.key}
                    href={`#${service.key}`}
                    onClick={() => setActiveTab(service.key)}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-dark text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {t(service.key)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Sections */}
        <div>
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;
            const features =
              locale === "ar" ? service.featuresAr : service.features;
            const isDark = idx % 2 === 1;

            return (
              <section
                key={service.key}
                id={service.key}
                className={`scroll-mt-24 sm:scroll-mt-28 ${isDark ? "bg-dark" : "bg-white"}`}
              >
                {/* Full-width grid — no max-w wrapper so image goes edge-to-edge on mobile/tablet */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-0 lg:min-h-[500px] max-w-[1400px] mx-auto`}
                >
                  {/* Image side — full bleed */}
                  <div
                    className={`relative overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={t(service.key)}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-secondary/20" />
                      </div>
                    )}
                    {/* Subtle overlay */}
                    <div
                      className={`absolute inset-0 ${isDark ? "bg-dark/20" : "bg-dark/10"}`}
                    />
                    {/* Service number badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm shadow-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Min height for mobile when image is absolute */}
                    <div className="min-h-[220px] sm:min-h-[300px] lg:min-h-0" />
                  </div>

                  {/* Content side — padding applied here only */}
                  <div
                    className={`${isReversed ? "lg:order-1" : ""} py-8 sm:py-12 lg:py-16 px-4 sm:px-6 ${isReversed ? "lg:ps-8 lg:pe-12 xl:pe-16" : "lg:ps-10 lg:pe-8 xl:ps-14"}`}
                  >
                    {/* Section label */}
                    <span
                      className={`section-label ${isDark ? "section-label-light" : ""} mb-4 inline-block`}
                    >
                      {t(service.key)}
                    </span>

                    <h2
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-3 ${isDark ? "text-white" : "text-text-dark"}`}
                    >
                      {t(service.key)}
                    </h2>

                    <p
                      className={`leading-relaxed mb-8 text-base ${isDark ? "text-gray-200" : "text-text-muted"}`}
                    >
                      {t(`${service.key}Desc`)}
                    </p>

                    {/* Key Features — modern grid */}
                    <div className="mb-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((feature, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                              isDark
                                ? "bg-white/5 hover:bg-white/8"
                                : "bg-light hover:bg-gray-100"
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span
                              className={`text-sm ${isDark ? "text-gray-200" : "text-text-dark"}`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brands */}
                    {service.brands.length > 0 && (
                      <div className="mb-8">
                        <h3
                          className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-white/70" : "text-text-muted"}`}
                        >
                          {t("brandsUsed")}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.brands.map((brand) => (
                            <span
                              key={brand}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                                isDark
                                  ? "bg-white/10 text-white/90 border border-white/10"
                                  : "bg-white text-text-dark border border-gray-200 shadow-sm"
                              }`}
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Industries */}
                    <div className="mb-8">
                      <h3
                        className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-white/70" : "text-text-muted"}`}
                      >
                        {t("industriesServed")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((ind) => {
                          const IndIcon = industryIcons[ind] || Factory;
                          return (
                            <span
                              key={ind}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                                isDark
                                  ? "bg-primary/20 text-primary border border-primary/20"
                                  : "bg-primary/5 text-primary border border-primary/10"
                              }`}
                            >
                              <IndIcon className="w-3.5 h-3.5" />
                              {tp(ind)}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      {t("requestQuote")}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Integration Diagram — modernized */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-dark/85" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 mt-4">
                {t("integrationTitle")}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Flame, label: "Fire Alarm" },
                  { icon: Droplets, label: "Sprinkler" },
                  { icon: Camera, label: "CCTV" },
                  { icon: Lock, label: "Access Control" },
                ].map(({ icon: IconComp, label }) => (
                  <div key={label} className="group">
                    <div className="accent-circle-icon mx-auto mb-4 w-16 h-16 group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-white/10 mb-6" />
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t("integrationCaption")}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Process — modernized */}
        <section className="py-16 sm:py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-14">
              <span className="section-label mb-4 inline-block">
                {t("processTitle")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mt-4">
                {t("processTitle")}
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <FadeInUp key={num} delay={num * 0.1}>
                  <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/10 group">
                    <div className="relative mx-auto mb-5 w-fit">
                      <div className="accent-circle-icon mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold">{num}</span>
                      </div>
                    </div>
                    <div className="accent-divider mx-auto max-w-[60px] mb-4" />
                    <h3 className="font-bold text-text-dark text-sm mb-2">
                      {t(`step${num}`)}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {t(`step${num}Desc`)}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA — modernized */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 40%),
                                 radial-gradient(circle at 80% 50%, #1A1A2E 0%, transparent 50%)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t("notSure")}
              </h2>
              <p className="text-white/90 text-lg mb-10">
                {t("freeAssessment")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+201221715027"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t("callUs")}
                </a>
                <a
                  href="https://wa.me/201221715027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("whatsappUs")}
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
