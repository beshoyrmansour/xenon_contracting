import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Fire Safety Consultation",
  description:
    "Contact Xenon Trade & Contracting for fire safety and security solutions. Call 01221715027, email eng.mina@xenon.com.eg, or visit us at 28 A Refaat St., Road Elfarag, Cairo. Free consultations available.",
  keywords: [
    "contact Xenon Egypt", "fire safety quote Cairo", "free fire safety consultation",
    "security system installation quote", "fire alarm quote Egypt", "WhatsApp Xenon",
    "اتصل بنا زينون", "استشارة مجانية سلامة حريق",
  ],
  openGraph: {
    title: "Contact Xenon Trade & Contracting — Free Consultation",
    description: "Get in touch for a free fire safety consultation. We respond within 2 hours during business hours. Call, WhatsApp, or fill out our form.",
    url: "https://www.xenon.com.eg/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Xenon Trade & Contracting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Xenon — Free Fire Safety Consultation",
    description: "Free fire safety consultation. We respond within 2 hours. Call, WhatsApp, or use our form.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.xenon.com.eg/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.xenon.com.eg/contact" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
