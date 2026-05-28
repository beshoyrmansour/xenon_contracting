import type { MetadataRoute } from "next";

const SITE_URL = "https://www.xenon.com.eg";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [OG_IMAGE],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [OG_IMAGE],
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [OG_IMAGE],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [OG_IMAGE],
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [OG_IMAGE],
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
      images: [OG_IMAGE],
    },
  ];
}
