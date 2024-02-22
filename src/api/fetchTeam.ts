import { request } from 'graphql-request';
import { getTeam } from './requests/getTeam';
import { Locale } from '@/i18n.config';
import {
  TeamMember,
  TeammateAttributes,
  TeammateData,
  TeammatesResponse,
} from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const fetchTeam = async (locale: Locale): Promise<TeamMember[]> => {
  try {
    const data: TeammatesResponse = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getTeam,
      {
        locale: locale,
      },
      { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}` }
    );

    const result =
      data && data.teammates && data.teammates.data
        ? data.teammates.data.map((teammate: TeammateData) => ({
            id: teammate.id,
            name: teammate.attributes.name,
            lastName: teammate.attributes.lastName,
            image: {
              alt: teammate.attributes.image.alt,
              url: teammate.attributes.image.src.data.attributes.url,
            },
          }))
        : [];

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
