import { request } from 'graphql-request';

import { getProjects } from './requests/getProjects';

import { Locale } from '@/i18n.config';
import { Token } from 'graphql';
import { HeroProps } from '@/sections/Hero/Hero.props';

export const fetchProjects = async (locale: Locale, filters: string[]): Promise<any> => {
  try {
    const data: any = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getProjects,
      {
        locale: locale,
        statuses: filters,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.projects.data;
    return result;
  } catch (error) {
    console.log(error);
    return {
      title: '',
      subtitle: '',
      image: '',
    } as any;
  }
};
