import { Locale, i18n } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { header, modal, logo, footer } = common;
  return (
    <>
      <Header data={header} lang={lang} modal={modal} logo={logo} />
      <main className=" relative flex-grow">{children}</main>

      <Footer data={footer} modal={modal} logo={logo} />
    </>
  );
}
