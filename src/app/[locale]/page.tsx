import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { use } from "react";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("HomePage");
  const aboutPageT = useTranslations("AboutPage");

  return (
    <div>
      <h1 className="font-bold text-xl">{t("title", { name: "Sina" })}</h1>
      <h3 className="text-gray-600">{t("description")}</h3>
      <ul className="my-4 border border-sky-400 border-dashed w-fit list-disc list-inside py-2 px-4 rounded-lg font-medium text-lg text-sky-700">
        <li>{t("carCount", { count: 0 })}</li>
        <li>{t("carCount", { count: 1 })}</li>
        <li>{t("carCount", { count: 2 })}</li>
      </ul>
      <Link className="mt-4 text-blue-500 hover:text-blue-600" href="/about">
        {aboutPageT("urlTitle")}
      </Link>
    </div>
  );
}
