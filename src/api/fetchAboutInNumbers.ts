import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';
import { AboutNumberProps } from '@/sections/AboutInNumbers/AboutInNumbers.props';
import { getAboutInNumbers } from './requests/getAboutInNumbers';

export const fetchAboutInNumbers = async (locale: Locale): Promise<AboutNumberProps[]> => {
  try {
    const data: any = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getAboutInNumbers,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.aboutUsSection.data.attributes.about;

    return result;
  } catch (error) {
    return {
      name: '',
      measure: '',
      quantiy: '',
      title: '',
    } as any;
  }
};
