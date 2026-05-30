import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, localizedUrl } from "@/i18n/seo";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const ROUTES: Route[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // One sitemap entry per locale, each declaring hreflang alternates to the
  // other locale + x-default. The default locale (ar) lives at the bare URL,
  // English under /en (the `as-needed` prefix strategy).
  return ROUTES.flatMap((route) => {
    const languages: Record<string, string> = {};
    for (const l of routing.locales) {
      languages[l] = localizedUrl(l, route.path);
    }
    languages["x-default"] = localizedUrl(routing.defaultLocale, route.path);

    return routing.locales.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
      images: [OG_IMAGE],
    }));
  });
}
