import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const localeCookie = cookieStore.get("locale")?.value;
  const acceptLanguage = headerStore.get("accept-language");

  let locale = localeCookie || "ar";
  if (!localeCookie && acceptLanguage?.includes("en")) {
    locale = "en";
  }

  if (!["en", "ar"].includes(locale)) {
    locale = "ar";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
