import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all supported locales.
  locales: ["en", "fa"],

  // The default locale. used when no locale is specified in the URL.
  defaultLocale: "en",
});
