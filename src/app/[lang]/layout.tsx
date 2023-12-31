import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { header, footer } = common;

  return (
    <html lang={lang}>
      <body>
        <Header data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
