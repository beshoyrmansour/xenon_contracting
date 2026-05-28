import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Fire Safety Experts Since 2012",
  description:
    "Learn about Xenon Trade & Contracting — Egypt's trusted fire safety and security company. 14+ years of experience, 150+ projects, certified by international standards. Founded by Eng. Mina Wagdy.",
  keywords: [
    "Xenon Trade Contracting", "fire safety Egypt", "security company Cairo",
    "Eng Mina Wagdy", "IBC authorized distributor", "fire safety certifications Egypt",
    "NFPA certified Egypt", "شركة زينون", "سلامة حريق مصر",
  ],
  openGraph: {
    title: "About Xenon Trade & Contracting — Fire Safety Experts Since 2012",
    description: "14+ years protecting Egypt's businesses. Certified fire safety and security solutions from design to 24/7 maintenance.",
    url: "https://www.xenon.com.eg/about",
    type: "website",
    siteName: "Xenon Trade & Contracting",
    locale: "en_EG",
    alternateLocale: "ar_EG",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Xenon Trade & Contracting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Xenon — Fire Safety Experts Since 2012",
    description: "14+ years protecting Egypt's businesses with certified fire safety & security solutions.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.xenon.com.eg/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.xenon.com.eg/about" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
