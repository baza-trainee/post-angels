import { Locale, i18n } from '@/i18n.config';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import Loading from './loading';

import PopupCookie from '@/components/PopupCookies/PopupCookie';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import './globals.css';
import { fetchDocuments } from '@/api/fetchDocuments';

import ScrollHandlerScript from '@/layout/Script/HeaderScript';

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

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta } = await getMetadata(lang);
  const { metadata, twitter, openGraph } = meta;
  const BASE_URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(BASE_URL || metadata.base),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL + '/uk',
      languages: {
        'en-US': '/en',
        'pt-PT': '/pt',
        'lt-LT': '/lt',
      },
    },
    keywords: metadata.keywords,
    twitter: {
      title: twitter.title,
      card: 'summary_large_image',
      images: {
        url: `${process.env.NEXT_PUBLIC_URL}${twitter.images.url}`,
        width: twitter.images.width,
        height: twitter.images.height,
        alt: twitter.images.alt,
      },
      description: twitter.description,
    },
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}${openGraph.images.url}`,
          width: openGraph.images.width,
          height: openGraph.images.height,
          alt: openGraph.images.alt,
        },
      ],
      description: openGraph.description,
      type: 'website',
      locale: openGraph.locale,
      title: openGraph.title,
      url: process.env.NEXT_PUBLIC_URL,
    },
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/favicon-32x32.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/favicon-16x16.png`,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/apple-touch-icon.png`,
      },
    ],
  };
}

export const revalidate = 60;
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale; project?: string };
}) {
  const lang = params.lang;
  const { common } = await getDictionary(lang);
  const { cookie, modal } = common;
  const documents = fetchDocuments(lang);
  const policy = (await documents).filter(el => el.attributes.name === 'policy')[0];
  return (
    <html lang={lang} className={`${eUkraine.variable} ${eUkraineHead.variable} font-sans`}>
      <body className="relative flex h-screen flex-col">
        <Suspense fallback={<Loading />}>
          {children}

          <PopupCookie data={cookie} modal={modal} document={policy} />
          <div id="modal" />
          <ScrollHandlerScript />
        </Suspense>
      </body>
    </html>
  );
}
