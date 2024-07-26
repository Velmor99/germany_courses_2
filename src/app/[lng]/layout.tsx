import { dir } from "i18next";
import { languages } from "../_lib/i18n/settings";
// import Footer from "@/components/Layout/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Layout lng={lng}>{children}</Layout>

        {/* <Footer lng={lng} /> */}
      </body>
    </html>
  );
}
