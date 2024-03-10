import { request } from 'graphql-request';

import { getVolunteerFormData } from './requests/getVolunteerFormData';
import {
  VolunteersDataFormProps,
  VolunteersFormProps,
  Notice,
} from '@/components/Participant/VolunteersForm/VolunteersForm.props';
import { Locale } from '@/i18n.config';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const fetchVolunteerFormData = async (
  locale: Locale,
  notice: Notice,
  formData: VolunteersDataFormProps
) => {
  try {
    const data = await request(
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
    Notify.success(notice.success);

    const id = data.createVolonter.data.id;

    return console.log(id);
  } catch (error) {
    console.log(error);
    Notify.failure(notice.fail);

    return [] as any;
  }
};
