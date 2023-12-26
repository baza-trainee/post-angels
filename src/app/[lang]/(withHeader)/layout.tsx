import { Locale, i18n } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import { Header } from '@/layout/Header';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { header, modal } = common;
  return (
    <>
      <Header data={header} lang={lang} modal={modal} />
      {children}
    </>
  );
}
