import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  SITE_NAME,
  localizedUrl,
  alternates,
  ogLocale,
  ogAltLocale,
} from "@/i18n/seo";

const PATH = "/partners";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageMeta.partners" });

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

export default async function PartnersLayout({
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
              { "@type": "ListItem", position: 2, name: t("partners"), item: localizedUrl(locale, PATH) },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
