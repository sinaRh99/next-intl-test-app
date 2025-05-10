"use client";

import { useLocale } from "next-intl";

export const ChangeLocaleButton = ({
  locale,
  onClick,
}: {
  locale: string;
  onClick: (locale: string) => void;
}) => {
  const currentLocale = useLocale();

  const buttonColor = locale === currentLocale ? "teal" : "blue";

  return (
    <button
      className={`px-8 py-2 rounded-xl bg-${buttonColor}-400 hover:bg-${buttonColor}-500 focus:bg-${buttonColor}-600 border-${buttonColor}-600 text-white cursor-pointer border transition duration-150 ease-in-out`}
      onClick={() => onClick(locale)}
    >
      {locale}
    </button>
  );
};
