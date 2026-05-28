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
    siteName: "Xenon Trade & Contracting",
    locale: "en_EG",
    alternateLocale: "ar_EG",
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

const SITE_URL = "https://www.xenon.com.eg";

const SERVICE_LIST = [
  { name: "Fire Alarm Systems", description: "Conventional and addressable fire detection, notification & monitoring systems." },
  { name: "Sprinkler Systems", description: "Wet, dry, deluge & pre-action sprinkler systems with UL/FM-listed pump rooms." },
  { name: "Gas Suppression (FM200 / CO2)", description: "Clean-agent fire suppression for server rooms, archives & sensitive areas." },
  { name: "Kitchen Hood Suppression", description: "Automatic wet-chemical fire suppression for commercial kitchens & restaurants." },
  { name: "CCTV Surveillance", description: "IP & analog cameras, DVR/NVR systems, remote monitoring and video analytics." },
  { name: "Public Address Systems", description: "Paging, background music, emergency announcements and zone control." },
  { name: "Intrusion Alarm Systems", description: "Motion detection, perimeter protection and 24/7 burglar monitoring." },
  { name: "Access Control & PBX", description: "Card/biometric access, attendance tracking, visitor management and telephone exchange." },
  { name: "Nurse Call Systems", description: "Hospital patient call buttons, nurse-station displays and emergency alerts." },
  { name: "Electrical Contracting", description: "Electrical extensions, panels, lighting and power distribution for industrial & commercial sites." },
];

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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Fire Safety, Security & Electrical Services",
            itemListElement: SERVICE_LIST.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                serviceType: service.name,
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "Country", name: "Egypt" },
              },
            })),
          }),
        }}
      />
      {children}
    </>
  );
}
