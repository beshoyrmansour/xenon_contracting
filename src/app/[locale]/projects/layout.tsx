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

const PATH = "/projects";

const FLAGSHIP_PROJECTS = [
  "National Bank of Egypt — Minya Branch",
  "Cairo Bank",
  "Alexandria Bank",
  "Wadi Degla Clubs Company — Maadi",
  "Police Hospital — Alexandria",
  "Good Shepherd Hospital",
  "Multex Egypt Factory",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageMeta.projects" });

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

export default async function ProjectsLayout({
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
              { "@type": "ListItem", position: 2, name: t("projects"), item: localizedUrl(locale, PATH) },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${localizedUrl(locale, PATH)}#collection`,
            name: "Fire Safety & Security Projects",
            description:
              "Portfolio of 150+ completed fire safety and security projects by Xenon Trade & Contracting across banking, healthcare, industrial, sports, education and commercial sectors in Egypt.",
            url: localizedUrl(locale, PATH),
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: 150,
              itemListElement: FLAGSHIP_PROJECTS.map((name, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
              })),
            },
          }),
        }}
      />
      {children}
    </>
  );
}
