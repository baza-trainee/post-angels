import { request } from 'graphql-request';

import { getPartners } from './requests/getPartners';

import { Locale } from '@/i18n.config';
import { PartnerDataProps, PartnerDataType } from '@/sections/PartnersTop/PartnersTop.props';

export const fetchPartners = async (locale: Locale): Promise<PartnerDataProps[]> => {
  try {
    const data: PartnerDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getPartners,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.partners.data;

    return result;
  } catch (error) {
    return [];
  }
};
