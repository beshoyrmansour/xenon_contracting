import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Pin the workspace root. A stray package-lock.json in the home directory
  // makes Turbopack infer the wrong root; this points it at the project.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Serve images straight from /public instead of routing them through the
    // Vercel Image Optimization function (/_next/image). That function can fail
    // on deploy (e.g. Hobby-plan transformation limits → 402), which renders
    // every next/image as a broken image even though the static files are fine.
    // These are small brand logos, so optimization adds negligible benefit.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
