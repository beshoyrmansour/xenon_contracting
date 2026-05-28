import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — 150+ Fire Safety Projects Across Egypt",
  description:
    "View Xenon's portfolio of 150+ completed fire safety and security projects across Egypt. Banking, healthcare, industrial, sports, education, and commercial sectors including National Bank of Egypt, Wadi Degla Clubs, and major factories.",
  keywords: [
    "fire safety projects Egypt", "security installations Cairo", "fire alarm installation bank",
    "sprinkler system factory", "CCTV hospital Egypt", "Wadi Degla fire safety",
    "National Bank Egypt security", "سابقة اعمال زينون", "مشاريع سلامة حريق مصر",
  ],
  openGraph: {
    title: "150+ Fire Safety & Security Projects | Xenon Trade & Contracting",
    description: "Explore our completed projects across banking, healthcare, industrial, sports, and commercial sectors in Cairo, Alexandria, and more.",
    url: "https://www.xenon.com.eg/projects",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Xenon Projects Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "150+ Fire Safety Projects Across Egypt | Xenon",
    description: "Banking, healthcare, industrial & commercial fire safety projects across Egypt.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.xenon.com.eg/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xenon.com.eg" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.xenon.com.eg/projects" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
