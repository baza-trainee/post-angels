import { request } from 'graphql-request';

import { getVolotnerFormData } from './requests/getVolotnerFormData';
import { VolunteersFormProps } from '@/components/Participant/VolunteersForm/VolunteersForm.props';

import { Locale } from '@/i18n.config';

export const fetchVolotnersFormData = async (locale: Locale, formData:VolunteersFormProps) => {
  //?????
  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getVolotnerFormData,
      {
        locale: locale, //?????
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
      }
    );

    const id = data.id; //?????
    return id;
  } catch (error) {
    console.log(error);
    return [] as any;
  }
};
