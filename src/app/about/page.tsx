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
import {
  Star,
  Shield,
  Lightbulb,
  CheckCircle,
  FileText,
  Receipt,
  ShieldCheck,
  Truck,
  Award,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2012", key: "t2012" },
  { year: "2014", key: "t2014" },
  { year: "2016", key: "t2016" },
  { year: "2018", key: "t2018" },
  { year: "2020", key: "t2020" },
  { year: "2022", key: "t2022" },
  { year: "2024", key: "t2024" },
];

const values = [
  { key: "quality", icon: Star },
  { key: "safety", icon: Shield },
  { key: "innovation", icon: Lightbulb },
  { key: "compliance", icon: CheckCircle },
];

const certifications = [
  { key: "taxReg", icon: FileText },
  { key: "commercialReg", icon: ShieldCheck },
  { key: "vatReg", icon: Receipt },
  { key: "electronicInvoice", icon: FileText },
  { key: "customsReg", icon: Truck },
  { key: "ibcCert", icon: Award },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />

        {/* Company Story */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInUp>
                <h2 className="text-3xl font-bold text-text-dark mb-6">
                  {t("storyTitle")}
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  {t("story")}
                </p>
                <div className="space-y-4">
                  <div className="p-4 glass-card rounded-xl">
                    <h3 className="font-semibold text-primary mb-1">
                      {t("mission")}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {t("missionText")}
                    </p>
                  </div>
                  <div className="p-4 glass-card rounded-xl">
                    <h3 className="font-semibold text-primary mb-1">
                      {t("vision")}
                    </h3>
                    <p className="text-sm text-text-muted">{t("visionText")}</p>
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <div className="relative flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <img
                      src="/xenon-logo-512.png"
                      alt="Xenon Logo"
                      className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
                    />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 sm:py-20 bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
                {t("timelineTitle")}
              </h2>
            </FadeInUp>

            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-secondary/30" />
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-secondary z-10" />
                  <div
                    className={`ms-10 sm:ms-0 sm:w-1/2 ${idx % 2 === 0 ? "sm:ps-8" : "sm:pe-8"}`}
                  >
                    <div className="glass-card p-4 rounded-xl shadow-md">
                      <span className="text-sm font-bold text-secondary">
                        {item.year}
                      </span>
                      <p className="text-sm text-text-dark mt-1">
                        {t(item.key)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
                {t("valuesTitle")}
              </h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ key, icon: Icon }) => (
                <StaggerItem key={key}>
                  <div className="text-center p-6 rounded-xl glass-card hover:shadow-lg transition-all">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-text-dark mb-2">
                      {t(key)}
                    </h3>
                    <p className="text-sm text-text-muted">{t(`${key}Desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-12 sm:py-20 bg-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {t("leadershipTitle")}
              </h2>
            </FadeInUp>
            <FadeInUp>
              <div className="glass-card-dark rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t("founderName")}
                  </h3>
                  <p className="text-secondary text-sm mb-3">
                    {t("founderRole")}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("founderBio")}
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 sm:py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
                {t("certificationsTitle")}
              </h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map(({ key, icon: Icon }) => (
                <StaggerItem key={key}>
                  <div className="glass-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="font-medium text-text-dark">{t(key)}</span>
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
