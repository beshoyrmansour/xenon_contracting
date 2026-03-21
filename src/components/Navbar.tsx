"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Mail,
  Zap,
  Flame,
  Droplets,
  Wind,
  UtensilsCrossed,
  Camera,
  Radio,
  ShieldAlert,
  Lock,
  BellRing,
} from "lucide-react";
import { setLocale } from "@/app/actions";
import { useRouter } from "next/navigation";

const serviceIcons = [
  { key: "electrical", icon: Zap },
  { key: "fireAlarm", icon: Flame },
  { key: "sprinkler", icon: Droplets },
  { key: "gasSuppression", icon: Wind },
  { key: "kitchenHood", icon: UtensilsCrossed },
  { key: "cctv", icon: Camera },
  { key: "publicAddress", icon: Radio },
  { key: "intrusionAlarm", icon: ShieldAlert },
  { key: "accessControl", icon: Lock },
  { key: "nurseCall", icon: BellRing },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const ts = useTranslations("services");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleLocaleSwitch = async () => {
    const newLocale = locale === "en" ? "ar" : "en";
    await setLocale(newLocale);
    router.refresh();
  };

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services"), hasDropdown: true },
    { href: "/projects", label: t("projects") },
    { href: "/partners", label: t("partners") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar with email (like Comatrol) — hidden on mobile and when scrolled */}
      <div
        className={`hidden lg:block bg-dark border-b border-white/5 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-white/70">
            <a
              href="mailto:eng.mina@xenon.com.eg"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              eng.mina@xenon.com.eg
            </a>
            <a
              href="tel:+201221715027"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +20 122 171 5027
            </a>
          </div>
          <button
            onClick={handleLocaleSwitch}
            className="text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            {t("language")}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/80 backdrop-blur-xl shadow-lg py-2.5 border-b border-white/5"
            : "bg-dark/80 backdrop-blur-xl py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/xenon-logo-white-256.png"
                alt="Xenon Trade & Contracting"
                width={256}
                height={256}
                style={{ objectFit: "contain" }}
                className={`transition-all duration-300 ${isScrolled ? "h-9 w-9" : "h-11 w-11"}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.href)
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 inset-x-3 h-0.5 bg-primary rounded-full" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.href)
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 inset-x-3 h-0.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {link.hasDropdown && (
                    <div
                      className={`absolute top-full mt-2 ${locale === "ar" ? "right-0" : "left-0"} w-[520px] rounded-xl shadow-2xl shadow-black/20 overflow-hidden transition-all duration-200 ${
                        isServicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="bg-dark/80 backdrop-blur-xl border border-white/10 rounded-xl p-3">
                        <div className="grid grid-cols-2 gap-1">
                          {serviceIcons.map(({ key, icon: Icon }) => (
                            <Link
                              key={key}
                              href={`/services#${key}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/8 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-sm text-white/90 group-hover/item:text-white transition-colors">
                                {ts(key)}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side — CTA button like Comatrol */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                {t("callNow")}
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+201221715027"
                className="p-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay — outside header to avoid stacking context issues */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-[60]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer — outside header for proper z-index */}
      <div
        className={`lg:hidden fixed inset-y-0 ${locale === "ar" ? "left-0" : "right-0"} w-[min(520px,100vw)] bg-dark/95 backdrop-blur-xl z-[70] transition-transform duration-300 ease-out shadow-2xl shadow-black/40 ${
          isMobileOpen
            ? "translate-x-0"
            : locale === "ar"
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b border-white/8">
          <Image
            src="/xenon-logo-white-128.png"
            alt="Xenon"
            width={128}
            height={128}
            className="h-9 w-9"
          />
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 flex flex-col h-[calc(100%-65px)]">
          {/* Phone CTA */}
          <a
            href="tel:+201221715027"
            className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-semibold text-base mb-5"
          >
            <Phone className="w-5 h-5" />
            01221715027
          </a>

          {/* Nav links */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "text-white bg-primary/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="ms-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Language toggle at bottom */}
          <button
            onClick={handleLocaleSwitch}
            className="w-full mt-4 px-4 py-3 text-base font-medium text-white/80 border border-white/15 rounded-xl hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            {t("language")}
          </button>
        </div>
      </div>
    </>
  );
}
