"use client";

import { useLocale, useTranslations } from "next-intl";

export const ChangeLocaleButton = ({
  locale,
  onClick,
}: {
  locale: string;
  onClick: (locale: string) => void;
}) => {
  const currentLocale = useLocale();
  const t = useTranslations("components.changeLocale");

  return (
    <button
      className={`px-8 py-2 rounded-xl ${
        locale === currentLocale
          ? "bg-teal-400 hover:bg-teal-500 focus:bg-teal-600 border-teal-600"
          : "bg-blue-400 hover:bg-blue-500 focus:bg-blue-600 border-blue-600"
      } text-white cursor-pointer border transition duration-150 ease-in-out`}
      onClick={() => onClick(locale)}
    >
      {t(locale)}
    </button>
  );
};
