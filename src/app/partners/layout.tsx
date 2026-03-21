import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners & Brands — Authorized IBC Distributor",
  description:
    "Xenon is an authorized IBC distributor working with Honeywell, Hochiki, TYCO, Kidde, Grundfos, Apollo, Simplex, TOA, Farfisa, Teletek, and more. Genuine international fire safety and security brands in Egypt.",
  keywords: [
    "IBC distributor Egypt", "Honeywell fire alarm Egypt", "Hochiki distributor",
    "TYCO sprinkler Egypt", "Kidde FM200", "Grundfos fire pump",
    "Apollo fire detection", "Simplex fire alarm Cairo", "TOA public address Egypt",
    "موزع معتمد IBC", "هونيويل مصر", "انظمة حريق دولية",
  ],
  openGraph: {
    title: "International Partners & Brands | Xenon Trade & Contracting",
    description: "Authorized distributor for 20+ international fire safety and security brands including Honeywell, Hochiki, TYCO, and more.",
    url: "https://www.xenon.com.eg/partners",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Xenon International Partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Partners & Brands | Xenon",
    description: "Authorized distributor for 20+ international fire safety brands — Honeywell, Hochiki, TYCO & more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.xenon.com.eg/partners" },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Partners", item: "https://www.xenon.com.eg/partners" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
