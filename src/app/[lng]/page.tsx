import Link from "next/link";
import { useTranslation } from "../_lib/i18n";
import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, undefined);
  return (
    <>
      <section>
        <IndividualBanner
          title="main_banner_title"
          text="main_banner_text"
          buttonText="main_banner_button"
          where="main"
          lang={lng}
        />
      </section>
    </>
  );
}
