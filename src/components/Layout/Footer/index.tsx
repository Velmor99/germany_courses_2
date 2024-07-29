import { useTranslation } from "../../../app/_lib/i18n";
import FooterBase from "./FooterBase";

export const Footer = async ({
  lang,
}: {
  lang: string;
}): Promise<JSX.Element> => {
  const { t } = await useTranslation(lang, undefined);
  return (
    <>
      <FooterBase t={t} lang={lang} />
    </>
  );
};

export default Footer;
