import Link from "next/link";
import { useTranslation } from "../_lib/i18n";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, undefined);
  return (
    <>
      <h1>{t("payment_button")}</h1>
      <Link href={`/${lng}/students`}>second page</Link>
    </>
  );
}
