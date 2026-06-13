import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { articles } from "@/data/articles";
import {
  SITE_URL,
  SITE_NAME,
  localizedUrl,
  alternates,
  ogLocale,
  ogAltLocale,
} from "@/i18n/seo";

const PATH = "/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageMeta.blog" });

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

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const isAr = locale === "ar";
  const dateFmt = new Intl.DateTimeFormat(isAr ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t("title"),
    description: t("subtitle"),
    url: localizedUrl(locale, PATH),
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: sorted.map((a) => ({
      "@type": "BlogPosting",
      headline: isAr ? a.title.ar : a.title.en,
      description: isAr ? a.excerpt.ar : a.excerpt.en,
      url: localizedUrl(locale, `${PATH}/${a.slug}`),
      datePublished: a.date,
      image: `${SITE_URL}${a.cover}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tn("home"), item: localizedUrl(locale) },
      { "@type": "ListItem", position: 2, name: t("title"), item: localizedUrl(locale, PATH) },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <PageHero title={t("title")} subtitle={t("subtitle")} />

        <section className="py-16 sm:py-24 bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sorted.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={article.cover}
                      alt={isAr ? article.title.ar : article.title.en}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                        {isAr ? article.category.ar : article.category.en}
                      </span>
                      <time
                        dateTime={article.date}
                        className="text-xs text-text-muted"
                      >
                        {dateFmt.format(new Date(article.date))}
                      </time>
                    </div>
                    <h2 className="font-bold text-text-dark text-lg leading-snug mb-2">
                      {isAr ? article.title.ar : article.title.en}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-4">
                      {isAr ? article.excerpt.ar : article.excerpt.en}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      {t("readMore")}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
