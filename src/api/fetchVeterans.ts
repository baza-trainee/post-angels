import { request } from 'graphql-request';

import { getVeterans } from './requests/getVeterans';

// import { TechProps } from '@/components/veterans/Tech/Tech.props';
import { Locale } from '@/i18n.config';

export const fetchVeterans = async (locale: Locale): Promise<any> => {
  try {
    const data: any = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getVeterans,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );
    const resultTechnology = data.veteransTechnologySection.data.attributes;
    const resultHelp = data.veteransHelpSection.data.attributes;
    return { resultTechnology, resultHelp };
  } catch (error) {
    return {
      title: '',
      subtitle: '',
      image: '',
    } as any;
  }
};
