import { request } from 'graphql-request';

import { getHero } from './requests/getHero';

import { Locale } from '@/i18n.config';
import { HeroDataProps, HeroDataType } from '@/sections/Hero/Hero.props';

export const fetchHero = async (locale: Locale): Promise<HeroDataProps> => {
  try {
    const data: HeroDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getHero,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.heroSection.data.attributes;
    return result;
  } catch (error) {
    return {
      title: '',
      subtitle: '',
      image: '',
    } as any;
  }
};
