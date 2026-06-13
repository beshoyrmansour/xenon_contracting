import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { Link } from "@/i18n/navigation";
import { articles, getArticle } from "@/data/articles";
import {
  SITE_URL,
  SITE_NAME,
  localizedUrl,
  alternates,
  ogLocale,
  ogAltLocale,
} from "@/i18n/seo";

const PATH = "/blog";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const isAr = locale === "ar";
  const title = isAr ? article.title.ar : article.title.en;
  const description = isAr ? article.excerpt.ar : article.excerpt.en;
  const url = localizedUrl(locale, `${PATH}/${slug}`);

  return {
    title,
    description,
    keywords: article.keywords,
    alternates: alternates(locale, `${PATH}/${slug}`),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: article.date,
      locale: ogLocale(locale),
      alternateLocale: ogAltLocale(locale),
      images: [{ url: article.cover, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.cover],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const isAr = locale === "ar";
  const title = isAr ? article.title.ar : article.title.en;
  const description = isAr ? article.excerpt.ar : article.excerpt.en;
  const dateFmt = new Intl.DateTimeFormat(isAr ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${SITE_URL}${article.cover}`,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: locale,
    mainEntityOfPage: localizedUrl(locale, `${PATH}/${slug}`),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tn("home"), item: localizedUrl(locale) },
      { "@type": "ListItem", position: 2, name: t("title"), item: localizedUrl(locale, PATH) },
      { "@type": "ListItem", position: 3, name: title, item: localizedUrl(locale, `${PATH}/${slug}`) },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        {/* Article header */}
        <header className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-dark overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.cover}
              alt={title}
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-dark/80" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              {t("backToBlog")}
            </Link>
            <time dateTime={article.date} className="block text-sm text-secondary mb-3">
              {dateFmt.format(new Date(article.date))}
            </time>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>
        </header>

        {/* Article body */}
        <article className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-text-dark font-medium leading-relaxed mb-10">
              {description}
            </p>

            {article.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  {isAr ? section.heading.ar : section.heading.en}
                </h2>
                {(isAr ? section.body.ar : section.body.en).map((para, j) => (
                  <p key={j} className="text-text-muted leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-light border border-gray-100 p-6 sm:p-8 text-center">
              <p className="text-text-dark font-semibold text-lg mb-5">
                {isAr
                  ? "تحتاج استشارة أو عرض سعر لأنظمة مكافحة الحريق؟"
                  : "Need advice or a quote for fire fighting systems?"}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
              >
                {isAr ? "تواصل معنا" : "Contact us"}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-12 sm:py-16 bg-light">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-text-dark mb-6">
                {t("relatedReading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={rel.cover}
                        alt={isAr ? rel.title.ar : rel.title.en}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-semibold text-text-dark text-sm leading-snug group-hover:text-primary transition-colors">
                      {isAr ? rel.title.ar : rel.title.en}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
