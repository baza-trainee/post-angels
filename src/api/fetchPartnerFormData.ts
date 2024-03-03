import { request } from 'graphql-request';

import { getPartnerFormData } from './requests/getPartnerFormData';
import { PartnersDataFormProps } from '@/components/Participant/PartnersForm/PartnersForm.props';

import { Locale } from '@/i18n.config';

export const fetchPartnerFormData = async (locale: Locale, formData: PartnersDataFormProps) => {
  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getPartnerFormData,
      {
        locale: locale,
        name: formData.name,
        lastName: formData.lastName,
        city: formData.city,
        email: formData.email,
        phone: formData.phone,
        partnerOrgTitle: formData.partnerOrgTitle,
        EDRPOU: formData.EDRPOU,
        supportMethods: formData.supportMethods,
        // ourOffers: formData.ourOffers,
      },

      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
      }
    );

    const id = data.createPartner.data.id;

    return console.log(id);
  } catch (error) {
    console.log(error);
    return [] as any;
  }
};
