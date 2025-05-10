import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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

  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>

      <Link href="/" locale="fa" style={{ color: "blue" }}>
        Home
      </Link>
    </div>
  );
}
