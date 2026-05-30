import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Pin the workspace root. A stray package-lock.json in the home directory
  // makes Turbopack infer the wrong root; this points it at the project.
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntl(nextConfig);
