import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';

import { getOneProject } from './requests/getOneProject';
import { ProjectOneDataType, ProjectOneDataProps } from '@/sections/ProjectPage/ProjectPage.props';

export const fetchOneProject = async (
  locale: Locale,
  slug: string
): Promise<ProjectOneDataProps> => {
  try {
    const data: ProjectOneDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getOneProject,
      {
        locale: locale,
        slug: slug,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = { projects: data.projects.data[0], supportsData: data.supportsData.data };

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
