import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { use } from "react";
import { useTranslations } from "next-intl";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h3>{t("description")}</h3>
      <Link href="/about" locale="en" style={{ color: "blue" }}>
        About us
      </Link>
    </div>
  );
}
