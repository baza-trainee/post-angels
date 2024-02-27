import { request } from 'graphql-request';

import { getVolunteerFormData } from './requests/getVolunteerFormData';
import { VolunteersFormProps } from '@/components/Participant/VolunteersForm/VolunteersForm.props';

import { Locale } from '@/i18n.config';

export const fetchVolunteerFormData = async (
  // locale: Locale,
  formData: VolunteersFormProps) => {
  try {
    const data = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getVolunteerFormData,
      {
        // locale: locale,
        formData: formData,
      },
      
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
      }
    );

    const id = data.createVolonter.data.id;
    return id;
  } catch (error) {
    console.log(error);
    return [] as any;
  }
};
