import { request } from 'graphql-request';

import { getHero } from './requests/getHero';

import { Locale } from '@/i18n.config';
import { Token } from 'graphql';
import { HeroProps } from '@/sections/Hero/Hero.props';
// import { InfoData, InfoDataType } from '@/types/Info';

export const fetchHero = async (locale: Locale): Promise<any> => {
  try {
    const data: any = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getHero,
      {
        locale: locale,
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}` },
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
