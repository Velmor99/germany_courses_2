import { dir } from "i18next";
import { languages } from "../_lib/i18n/settings";
import Footer from "@/components/Layout/Footer/Footer";

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
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
