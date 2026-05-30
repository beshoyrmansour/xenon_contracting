import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run on all pathnames except API routes, Next.js internals, and files
  // with an extension (e.g. /favicon.ico, /og-image.png, /sitemap.xml).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
