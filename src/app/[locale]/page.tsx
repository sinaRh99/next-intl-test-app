import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { use } from "react";
import { useMessages, useTranslations } from "next-intl";
import { RichText } from "../components";

const currencyFormat = {
  number: {
    currency: {
      style: "currency",
      currency: "IRR",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title", { name: "Sina" }),
  };
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const messages = useMessages();

  const keys = Object.keys(messages.HomePage.developers);

  const t = useTranslations("HomePage");
  const aboutPageT = useTranslations("AboutPage");

  return (
    <div>
      <h1 className="font-bold text-xl">{t("title", { name: "Sina" })}</h1>
      <h3 className="text-gray-600">{t("description")}</h3>
      <div className="flex wrap gap-4 my-4">
        <ul className="border border-sky-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-sky-700">
          <li>{t("carCount", { count: 0 })}</li>
          <li>{t("carCount", { count: 1 })}</li>
          <li>{t("carCount", { count: 2 })}</li>
        </ul>
        <ul className="border border-orange-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-orange-700">
          <li>{t("personOrder", { order: 0 })}</li>
          <li>{t("personOrder", { order: 1 })}</li>
          <li>{t("personOrder", { order: 2 })}</li>
        </ul>
        <ul className="border border-fuchsia-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-fuchsia-700">
          <li>{t("hasCloth", { gender: "male" })}</li>
          <li>{t("hasCloth", { gender: "female" })}</li>
        </ul>
        <div className="border border-dashed py-2 px-4 w-fit border-cyan-400 rounded-lg">
          <RichText>
            {(tags) => t.rich("richText", { ...tags, emoji: "=D" })}
          </RichText>
        </div>
        <ul className="border border-blue-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-blue-700">
          {keys.map((key) => (
            <li key={key} className="mb-4">
              <span className="text-xl font-normal">
                {t(`developers.${key}.name`)}: {t(`developers.${key}.age`)}
              </span>
              <h3 className="text-2xl font-bold">
                {t(`developers.${key}.work`)}
              </h3>
            </li>
          ))}
        </ul>
        <ul className="border border-stone-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-stone-700">
          <li>{t("numbersTest.basic", { value: 24 })}</li>
          <li>{t("numbersTest.basic", { value: 24.6 })}</li>
          <li>{t("numbersTest.basic", { value: 24.585542 })}</li>
          <li>{t("numbersTest.basic", { value: 100320000558998.21425 })}</li>
          <li>{t("numbersTest.percentage", { value: 24 })}</li>
          <li>{t("numbersTest.percentage", { value: 24.6 })}</li>
          <li>{t("numbersTest.percentage", { value: 24.585542 })}</li>
          <li>
            {t("numbersTest.percentage", { value: 100320000558998.21425 })}
          </li>
          <li>{t("numbersTest.2digits", { value: 24 })}</li>
          <li>{t("numbersTest.2digits", { value: 24.6 })}</li>
          <li>{t("numbersTest.2digits", { value: 24.585542 })}</li>
          <li>{t("numbersTest.2digits", { value: 100320000558998.21425 })}</li>
          <li>{t("numbersTest.currency", { value: 24 }, currencyFormat)}</li>
          <li>{t("numbersTest.currency", { value: 24.6 }, currencyFormat)}</li>
          <li>
            {t("numbersTest.currency", { value: 24.585542 }, currencyFormat)}
          </li>
          <li>
            {t(
              "numbersTest.currency",
              { value: 100320000558998.21425 },
              currencyFormat
            )}
          </li>
        </ul>
      </div>
      <Link className="mt-4 text-blue-500 hover:text-blue-600" href="/about">
        {aboutPageT("urlTitle")}
      </Link>
    </div>
  );
}
