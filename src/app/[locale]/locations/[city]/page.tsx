import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { cities, getCity } from "@/data/locations";
import { services } from "@/data/services";
import {
  SITE_URL,
  SITE_NAME,
  localizedUrl,
  alternates,
  ogLocale,
  ogAltLocale,
} from "@/i18n/seo";

const PATH = "/locations";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  const data = getCity(city);
  if (!data) return {};

  const isAr = locale === "ar";
  const name = isAr ? data.name.ar : data.name.en;
  const title = isAr
    ? `مكافحة حريق في ${name} — توريد وتركيب وصيانة | زينون`
    : `Fire Fighting Systems in ${name} — Supply, Install & Maintain | Xenon`;
  const description = isAr ? data.intro.ar : data.intro.en;
  const url = localizedUrl(locale, `${PATH}/${city}`);

  return {
    title,
    description,
    alternates: alternates(locale, `${PATH}/${city}`),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: ogAltLocale(locale),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  setRequestLocale(locale);

  const data = getCity(city);
  if (!data) notFound();

  const t = await getTranslations({ locale, namespace: "locations" });
  const ts = await getTranslations({ locale, namespace: "services" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const isAr = locale === "ar";
  const name = isAr ? data.name.ar : data.name.en;
  const heroTitle = isAr
    ? `مكافحة الحريق وأنظمة الأمن في ${name}`
    : `Fire Fighting & Security Systems in ${name}`;
  const areas = isAr ? data.areas.ar : data.areas.en;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: heroTitle,
    serviceType: "Fire fighting and security systems",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name },
    description: isAr ? data.intro.ar : data.intro.en,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tn("home"), item: localizedUrl(locale) },
      { "@type": "ListItem", position: 2, name: heroTitle, item: localizedUrl(locale, `${PATH}/${city}`) },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <PageHero title={heroTitle} subtitle={t("eyebrow")} />

        {/* Intro */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-text-dark leading-relaxed">
              {isAr ? data.intro.ar : data.intro.en}
            </p>
          </div>
        </section>

        {/* Services in city */}
        <section className="py-14 sm:py-20 bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-8">
              {t("servicesTitle", { city: name })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service.key}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-text-dark">{ts(service.key)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas covered */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-8">
              {t("coverageTitle")}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 bg-primary overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("ctaTitle", { city: name })}
            </h2>
            <p className="text-white/90 text-lg mb-8">{t("ctaSubtitle")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-light transition-colors"
            >
              {t("ctaButton")}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
