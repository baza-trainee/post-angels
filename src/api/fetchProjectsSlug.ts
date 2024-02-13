import { request } from 'graphql-request';

import { getProjectsSlugs } from './requests/getProjectsSlugs';

import { Locale } from '@/i18n.config';

import { ProjectDataSlugsProps, ProjectsSlugsDataType } from '@/sections/Projects/Projects.props';

export const fetchProjectsSlug = async (locale: Locale): Promise<ProjectDataSlugsProps[]> => {
  try {
    const data: ProjectsSlugsDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getProjectsSlugs,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.projects.data.map(el => el.attributes);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
