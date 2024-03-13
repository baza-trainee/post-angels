import { request } from 'graphql-request';
import { Locale } from '@/i18n.config';

import { getPartnerFormData } from './requests/getPartnerFormData';
import { PartnersDataFormProps, CreatePartnerResponse } from '@/components/Participant/PartnersForm/PartnersForm.props';

export const fetchPartnerFormData = async (locale: Locale, formData: PartnersDataFormProps) => {
  const data: CreatePartnerResponse = await request(
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
      ourOffer: formData.ourOffer,
    },
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
    }
  );

  const id = data.createPartner.data.id;
  return console.log(id);
};
