import { Locale, i18n } from '@/i18n.config';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';

import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';
import { getDictionary } from '@/lib/dictionary';
import './globals.css';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const eUkraine = localFont({
  variable: '--font-eUkraine',
  src: [
    {
      path: '../../../public/fonts/e-Ukraine-Bold.otf',
      weight: '700',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Light.otf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Medium.otf',
      weight: '500',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Thin.otf',
      weight: '100',
    },
    {
      path: '../../../public/fonts/e-Ukraine-UltraLight.otf',
      weight: '200',
    },
  ],
});

const eUkraineHead = localFont({
  src: [
    {
      path: '../../../public/fonts/e-UkraineHead-Bold.otf',
      weight: '700',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Light.otf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Medium.otf',
      weight: '500',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Thin.otf',
      weight: '100',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-UltraLight.otf',
      weight: '200',
    },
  ],
  variable: '--font-eUkraineHead',
});

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
    <html lang={lang} className={`${eUkraine.variable} ${eUkraineHead.variable} font-sans`}>
      <body>
        <Suspense fallback={<Loading />}>
          <Header data={header} />
          {children}
          <Footer data={footer} />

          <div id="modal" />
        </Suspense>
      </body>
    </html>
  );
}
