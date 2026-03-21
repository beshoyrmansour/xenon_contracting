import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Fire Safety, Security & Electrical Solutions",
  description:
    "Explore Xenon's 10 specialized services: fire alarm systems, sprinkler systems, gas suppression (FM200/CO2), CCTV surveillance, access control, electrical contracting, nurse call, kitchen hood suppression, and more.",
  keywords: [
    "fire alarm systems Egypt", "sprinkler installation Cairo", "FM200 gas suppression",
    "CCTV installation Egypt", "access control systems", "electrical contracting Cairo",
    "Honeywell fire alarm", "Hochiki addressable", "TYCO sprinkler", "kitchen hood suppression",
    "nurse call system Egypt", "انظمة انذار حريق", "رشاشات حريق مصر", "كاميرات مراقبة",
  ],
  openGraph: {
    title: "Fire Safety & Security Services | Xenon Trade & Contracting",
    description: "10 specialized fire safety, security, and electrical services. From fire alarms to sprinklers, CCTV to access control — all with international brands.",
    url: "https://www.xenon.com.eg/services",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Xenon Fire Safety & Security Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Safety & Security Services | Xenon",
    description: "10 specialized services — fire alarms, sprinklers, CCTV, gas suppression, access control & more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.xenon.com.eg/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Services", item: "https://www.xenon.com.eg/services" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
