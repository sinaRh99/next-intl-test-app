import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
  };
}

export default async function about() {
  const t = await getTranslations("AboutPage");
  const homePageT = await getTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
      <Link className="mt-4 text-blue-500 hover:text-blue-600" href="/">
        {homePageT("urlTitle")}
      </Link>
    </div>
  );
}
