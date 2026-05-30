import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  SITE_URL,
  SITE_NAME,
  localizedUrl,
  alternates,
  ogLocale,
  ogAltLocale,
} from "@/i18n/seo";

const PATH = "/services";

const SERVICE_LIST = [
  { name: "Fire Alarm Systems", description: "Conventional and addressable fire detection, notification & monitoring systems." },
  { name: "Sprinkler Systems", description: "Wet, dry, deluge & pre-action sprinkler systems with UL/FM-listed pump rooms." },
  { name: "Gas Suppression (FM200 / CO2)", description: "Clean-agent fire suppression for server rooms, archives & sensitive areas." },
  { name: "Kitchen Hood Suppression", description: "Automatic wet-chemical fire suppression for commercial kitchens & restaurants." },
  { name: "CCTV Surveillance", description: "IP & analog cameras, DVR/NVR systems, remote monitoring and video analytics." },
  { name: "Public Address Systems", description: "Paging, background music, emergency announcements and zone control." },
  { name: "Intrusion Alarm Systems", description: "Motion detection, perimeter protection and 24/7 burglar monitoring." },
  { name: "Access Control & PBX", description: "Card/biometric access, attendance tracking, visitor management and telephone exchange." },
  { name: "Nurse Call Systems", description: "Hospital patient call buttons, nurse-station displays and emergency alerts." },
  { name: "Electrical Contracting", description: "Electrical extensions, panels, lighting and power distribution for industrial & commercial sites." },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageMeta.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: alternates(locale, PATH),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localizedUrl(locale, PATH),
      siteName: SITE_NAME,
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: ogAltLocale(locale),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: t("home"), item: localizedUrl(locale) },
              { "@type": "ListItem", position: 2, name: t("services"), item: localizedUrl(locale, PATH) },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Fire Safety, Security & Electrical Services",
            itemListElement: SERVICE_LIST.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                serviceType: service.name,
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "Country", name: "Egypt" },
              },
            })),
          }),
        }}
      />
      {children}
    </>
  );
}
