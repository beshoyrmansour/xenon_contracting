import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const SITE_URL = "https://www.xenon.com.eg";
const SITE_NAME = "Xenon Trade & Contracting";
const SITE_NAME_AR = "شركة زينون للتجارة والمقاولات";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A1A2E" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A2E" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Xenon Trade & Contracting | Fire Safety & Security Systems — Egypt",
    template: "%s | Xenon Trade & Contracting",
  },
  description:
    "Leading Egyptian company specializing in fire alarm systems, sprinkler systems, CCTV, access control, and electrical contracting. 14+ years of experience, 150+ projects across banking, healthcare, industrial & commercial sectors.",
  keywords: [
    "fire alarm Egypt",
    "sprinkler system Cairo",
    "CCTV installation Egypt",
    "access control systems",
    "FM200 gas suppression",
    "CO2 fire suppression",
    "Honeywell fire alarm Egypt",
    "Hochiki Egypt",
    "fire safety company Egypt",
    "electrical contracting Cairo",
    "nurse call system",
    "kitchen hood suppression",
    "intrusion alarm Egypt",
    "public address system",
    "IBC authorized distributor",
    "NFPA Egypt",
    "زينون للتجارة والمقاولات",
    "انظمة انذار الحريق مصر",
    "كاميرات مراقبة مصر",
    "رشاشات حريق",
    "اطفاء غازات FM200",
    "مقاولات كهربائية القاهرة",
    "شركة سلامة حريق",
  ],
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: "Eng. Mina Wagdy", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "Fire Safety & Security",

  // Open Graph — Facebook, WhatsApp, Telegram, LinkedIn
  openGraph: {
    title: "Xenon Trade & Contracting | Fire Safety & Security Systems — Egypt",
    description:
      "Integrated fire safety & security solutions. Fire alarms, sprinklers, CCTV, access control, gas suppression & electrical contracting. 14+ years, 150+ projects across Egypt.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_EG",
    alternateLocale: "ar_EG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xenon Trade & Contracting — Fire Safety & Security Solutions in Egypt",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 400,
        height: 400,
        alt: "Xenon Trade & Contracting Logo",
        type: "image/png",
      },
      {
        url: "/xenon-logo-512.png",
        width: 512,
        height: 512,
        alt: "Xenon Logo",
        type: "image/png",
      },
    ],
    phoneNumbers: ["+201221715027", "+201501548315"],
    emails: ["eng.mina@xenon.com.eg", "sales@xenon.com.eg"],
    countryName: "Egypt",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Xenon Trade & Contracting | Fire Safety & Security — Egypt",
    description:
      "Integrated fire safety & security solutions. 14+ years, 150+ projects. Fire alarms, sprinklers, CCTV, access control & more.",
    images: ["/og-image.png"],
    creator: "@xenoncontracting",
    site: "@xenoncontracting",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons & PWA
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/xenon-logo-256.png", sizes: "256x256" },
      { url: "/xenon-logo-128.png", sizes: "128x128" },
    ],
  },

  // Canonical & alternates
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-EG": SITE_URL,
      "ar-EG": `${SITE_URL}/ar`,
    },
  },

  // App links
  appLinks: {
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },

  // Verification (placeholder — fill in real IDs when available)
  // verification: {
  //   google: "your-google-verification-id",
  //   yandex: "your-yandex-id",
  // },

  other: {
    // WhatsApp specific
    "og:whatsapp_sticker_pack_publisher": SITE_NAME,
    // Telegram
    "telegram:channel": "@xenoncontracting",
    // Business info
    "business:contact_data:street_address": "27 @ 28st. Alhelmeya, Gesr Elswis",
    "business:contact_data:locality": "Cairo",
    "business:contact_data:country_name": "Egypt",
    "business:contact_data:phone_number": "+201221715027, +201501548315",
    "business:contact_data:email": "eng.mina@xenon.com.eg",
    "business:contact_data:website": SITE_URL,
    // Pinterest
    "pinterest-rich-pin": "true",
    // Apple
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Xenon",
    // MS
    "msapplication-TileColor": "#1A1A2E",
    "msapplication-TileImage": "/xenon-logo-256.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#business`,
              name: SITE_NAME,
              alternateName: SITE_NAME_AR,
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/xenon-logo-512.png`,
                width: 512,
                height: 512,
              },
              image: `${SITE_URL}/og-image.png`,
              telephone: ["+201221715027", "+201501548315"],
              email: "eng.mina@xenon.com.eg",
              foundingDate: "2012-02",
              founder: {
                "@type": "Person",
                name: "Eng. Mina Wagdy Wadee Ibrahim",
                jobTitle: "Managing Engineer & Founder",
              },
              description:
                "Leading Egyptian company specializing in fire alarm systems, sprinkler systems, CCTV, access control, and electrical contracting.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "27 @ 28st. Alhelmeya, behind Misr Elgadida Military Hospital, Gesr Elswis",
                addressLocality: "Cairo",
                addressRegion: "Cairo Governorate",
                postalCode: "11441",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.115889,
                longitude: 31.329802,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+201221715027",
                  contactType: "customer service",
                  email: "eng.mina@xenon.com.eg",
                  availableLanguage: ["Arabic", "English"],
                  areaServed: "EG",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+201221715027",
                  contactType: "emergency",
                  availableLanguage: ["Arabic", "English"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "00:00",
                    closes: "23:59",
                  },
                },
              ],
              sameAs: [
                "https://www.linkedin.com/in/xenon-contracting-a755223b6",
              ],
              priceRange: "$$",
              currenciesAccepted: "EGP",
              paymentAccepted: "Cash, Bank Transfer",
              areaServed: {
                "@type": "Country",
                name: "Egypt",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 10,
                maxValue: 50,
              },
              knowsAbout: [
                "Fire Alarm Systems",
                "Sprinkler Systems",
                "Gas Suppression FM200",
                "CCTV Surveillance",
                "Access Control",
                "Electrical Contracting",
                "Nurse Call Systems",
                "Kitchen Hood Suppression",
                "Public Address Systems",
                "Intrusion Alarm Systems",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fire Safety & Security Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm Systems", description: "Conventional and addressable fire detection systems" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Systems", description: "Automatic water firefighting and pump rooms" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Suppression (FM200/CO2)", description: "Clean agent suppression for sensitive areas" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Surveillance", description: "Closed-circuit television monitoring systems" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control & PBX", description: "Entry control and telephone exchange systems" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Contracting", description: "Complete electrical works, panels, and lighting" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Hood Suppression", description: "Automatic fire suppression for commercial kitchens" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Public Address Systems", description: "Internal broadcasting and intercom solutions" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intrusion Alarm Systems", description: "Burglar and intrusion detection" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nurse Call Systems", description: "Hospital patient alert and nurse call systems" } },
                ],
              },
            }),
          }}
        />

        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              alternateName: SITE_NAME_AR,
              url: SITE_URL,
              logo: `${SITE_URL}/xenon-logo-512.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: ["+201221715027", "+201501548315"],
                contactType: "customer service",
                email: "eng.mina@xenon.com.eg",
                availableLanguage: ["Arabic", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/in/xenon-contracting-a755223b6",
              ],
            }),
          }}
        />

        {/* Structured Data — WebSite (for sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: SITE_NAME,
              alternateName: SITE_NAME_AR,
              url: SITE_URL,
              inLanguage: ["en", "ar"],
              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
            }),
          }}
        />

        {/* Structured Data — BreadcrumbList (homepage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
              ],
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
