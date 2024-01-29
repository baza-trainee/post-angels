// import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
    ...(await import(`@/dictionaries/en/project.json`)).default,
  }),

  ua: async () => ({
    ...(await import(`@/dictionaries/ua/common.json`)).default,
    ...(await import(`@/dictionaries/ua/project.json`)).default,
  }),
};

const metadata = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/meta/common.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/home.json`)).default,
  }),

  ua: async () => ({
    ...(await import(`@/dictionaries/ua/meta/common.json`)).default,
    // ...(await import(`@/dictionaries/ua/meta/home.json`)).default,
  }),
};

const commonDictionaries = {
  en: async () => (await import(`@/dictionaries/en/common.json`)).default,
  ua: async () => (await import(`@/dictionaries/ua/common.json`)).default,
};

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
export const getMetadata = async (lang: Locale) => metadata[lang]();
export const getCommonDictionaries = async (lang: Locale) => commonDictionaries[lang]();
