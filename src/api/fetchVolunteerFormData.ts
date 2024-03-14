import { request } from 'graphql-request';

import { getVolunteerFormData } from './requests/getVolunteerFormData';
import {
  VolunteersDataFormProps,
  CreateVolunteerResponse,
} from '@/components/Participant/VolunteersForm/VolunteersForm.props';
import { Locale } from '@/i18n.config';

export const fetchVolunteerFormData = async (locale: Locale, formData: VolunteersDataFormProps) => {
  const data: CreateVolunteerResponse = await request(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
    getVolunteerFormData,
    {
      locale: locale,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      lastName: formData.lastName,
      city: formData.city,
      telegram: formData.telegram,
      message: formData.message,
      activity: formData.activity,
      volunteerCertificate: formData.volunteerCertificate === 'true' ? true : false,
      carAvailability: formData.carAvailability === 'true' ? true : false,
    },

    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
    }
  );
  const id = data.createVolonter.data.id;

  return console.log(id);
};
