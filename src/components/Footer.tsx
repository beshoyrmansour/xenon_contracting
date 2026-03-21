"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  ShieldCheck,
  FileText,
  Receipt,
  Truck,
  Award,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const services = useTranslations("services");

  const quickLinks = [
    { href: "/", label: nav("home") },
    { href: "/about", label: nav("about") },
    { href: "/services", label: nav("services") },
    { href: "/projects", label: nav("projects") },
    { href: "/partners", label: nav("partners") },
    { href: "/contact", label: nav("contact") },
  ];

  const serviceList = [
    "electrical",
    "fireAlarm",
    "sprinkler",
    "gasSuppression",
    "kitchenHood",
    "cctv",
    "publicAddress",
    "intrusionAlarm",
    "accessControl",
    "nurseCall",
  ] as const;

  const certifications = [
    { icon: FileText, label: "Tax Reg" },
    { icon: Receipt, label: "VAT" },
    { icon: ShieldCheck, label: "Commercial Reg" },
    { icon: Truck, label: "Customs" },
    { icon: Award, label: "IBC Distributor" },
  ];

  return (
    <footer className="bg-dark text-light">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Info */}
          <div>
            <Image
              src="/xenon-logo-white-128.png"
              alt="Xenon Trade & Contracting"
              width={128}
              height={128}
              style={{ objectFit: "contain" }}
              className="h-12 w-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("tagline")}
            </p>
            <a
              href="https://www.linkedin.com/in/xenon-contracting-a755223b6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("ourServices")}
            </h3>
            <ul className="space-y-2">
              {serviceList.map((key) => (
                <li key={key}>
                  <Link
                    href={`/services#${key}`}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {services(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("contactInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  28 A Refaat St., Road Elfarag, Cairo, Egypt
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="tel:+201221715027"
                  className="text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  01221715027
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:eng.mina@xenon.com.eg"
                  className="text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  eng.mina@xenon.com.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:sales@xenon.com.eg"
                  className="text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  sales@xenon.com.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Sun — Thu, 9 AM — 5 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-400 text-center mb-4">
            {t("certifications")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-gray-400"
              >
                <Icon className="w-4 h-4 text-secondary" />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Bar */}
      <div className="bg-primary/20 border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3">
          <Phone className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-light">
            {t("emergencyCall")}{" "}
            <a
              href="tel:+201221715027"
              className="text-primary font-bold hover:text-accent transition-colors"
            >
              01221715027
            </a>
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
