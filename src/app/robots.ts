import type { MetadataRoute } from "next";

const SITE_URL = "https://www.xenon.com.eg";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything except internal/private paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      // Major search engines
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      // Social & messaging crawlers — allow everything for rich link previews
      {
        userAgent: [
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "TelegramBot",
          "Slackbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
