import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Arabic is the primary audience and the default/fallback locale.
  locales: ["ar", "en"],
  defaultLocale: "ar",
  // Arabic (default) is served at the bare path (/, /services, …) with NO
  // prefix; English is served under /en (/en, /en/services, …).
  localePrefix: "as-needed",
  // Auto-detect from the NEXT_LOCALE cookie, then the Accept-Language header.
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
