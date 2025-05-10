"use client";

import { routing } from "@/i18n/routing";
import { ChangeLocaleButton } from "./ChangeLocaleButton";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const ChangeLocale = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("components.changeLocale");

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-4 mb-4">
      <span className="text-sm text-gray-500">{t("title")}</span>
      {routing.locales.map((locale) => (
        <ChangeLocaleButton
          key={locale}
          locale={locale}
          onClick={handleChangeLocale}
        />
      ))}
    </div>
  );
};
