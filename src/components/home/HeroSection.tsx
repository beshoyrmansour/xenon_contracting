"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import LogoWatermark from "@/components/LogoWatermark";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 sm:py-40">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          <div className="max-w-2xl">
          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-primary font-semibold text-sm tracking-widest uppercase mb-5"
          >
            Fire Safety &bull; Security &bull; Electrical
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            {t("headline")}
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl font-medium text-white/90 mb-6"
          >
            {t("slogan")}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
          >
            {t("subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl text-sm hover:bg-primary-dark transition-colors"
            >
              {t("cta1")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              {t("cta2")}
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-6 sm:gap-10"
          >
            {[
              { value: "14+", label: "Years" },
              { value: "150+", label: "Projects" },
              { value: "20+", label: "Brands" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <span className="block text-2xl sm:text-3xl font-bold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 uppercase tracking-wider mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 flex justify-center lg:block lg:ms-auto"
          >
            <Image
              src="/xenon-logo-white-full.png"
              alt="Xenon Trade & Contracting"
              width={939}
              height={1212}
              className="h-56 sm:h-72 lg:h-96 w-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Logo watermark */}
      <LogoWatermark
        variant="light"
        opacity={0.035}
        size="w-[600px] h-[600px]"
        position="absolute -right-20 -bottom-20"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
