import { request } from 'graphql-request';

import { getProjects } from './requests/getProjects';

import { Locale } from '@/i18n.config';

import { ProjectDataProps, ProjectsDataType } from '@/sections/Projects/Projects.props';

export const fetchProjects = async (
  locale: Locale,
  filters: string[]
): Promise<ProjectDataProps[]> => {
  try {
    const data: ProjectsDataType = await request(
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
    return [] as any;
  }
};
