import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware drop-in replacements for next/link & next/navigation.
// <Link href="/about"> automatically resolves to /ar/about or /en/about,
// and usePathname() returns the path WITHOUT the locale prefix.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
