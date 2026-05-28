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
  const contact = useTranslations("contact");

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
    <footer className="bg-gray-50 text-text-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Info */}
          <div>
            <Image
              src="/xenon-logo-256.png"
              alt="Xenon Trade & Contracting"
              width={198}
              height={256}
              style={{ objectFit: "contain" }}
              className="h-12 w-auto mb-4"
            />
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {t("tagline")}
            </p>
            <a
              href="https://www.linkedin.com/in/xenon-contracting-a755223b6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">
              {t("ourServices")}
            </h3>
            <ul className="space-y-2">
              {serviceList.map((key) => (
                <li key={key}>
                  <Link
                    href={`/services#${key}`}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {services(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">
              {t("contactInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=30.115889,31.329802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {contact("address")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+201221715027"
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    01221715027
                  </a>
                  <a
                    href="tel:+201501548315"
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    01501548315
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:eng.mina@xenon.com.eg"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  eng.mina@xenon.com.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@xenon.com.eg"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  sales@xenon.com.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-text-muted">
                  Sun — Thu, 9 AM — 5 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-text-muted text-center mb-4">
            {t("certifications")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-text-muted"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Bar */}
      <div className="bg-primary/5 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3">
          <Phone className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text-dark">
            {t("emergencyCall")}{" "}
            <a
              href="tel:+201221715027"
              className="text-primary font-bold hover:text-primary-dark transition-colors"
            >
              01221715027
            </a>
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-text-muted">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
