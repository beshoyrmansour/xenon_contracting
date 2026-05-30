import { routing } from "./routing";

export const SITE_URL = "https://www.xenon.com.eg";
export const SITE_NAME = "Xenon Trade & Contracting";
export const SITE_NAME_AR = "شركة زينون للتجارة والمقاولات";

/**
 * Build the absolute URL for a given locale + path under the `as-needed`
 * prefix strategy: the default locale (ar) has NO prefix, others get `/en`.
 * `path` is the locale-less path, e.g. "" for home or "/about".
 */
export function localizedUrl(locale: string, path = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

/**
 * Canonical + hreflang alternates for a page. Emits one entry per locale plus
 * an x-default pointing at the default locale, per Google's guidance.
 */
export function alternates(locale: string, path = "") {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = localizedUrl(l, path);
  }
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);

  return {
    canonical: localizedUrl(locale, path),
    languages,
  };
}

export const ogLocale = (locale: string) =>
  locale === "ar" ? "ar_EG" : "en_EG";
export const ogAltLocale = (locale: string) =>
  locale === "ar" ? "en_EG" : "ar_EG";
