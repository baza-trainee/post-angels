import { Locale } from '@/i18n.config';
import { request } from 'graphql-request';

import {
  CreateVeteranResponse,
  VeteransDataFormProps,
} from '@/components/veterans/Form/Form.props';
import { getVeteranFormData } from './requests/getVeteranFormData';

export const fetchVeteranFormData = async (locale: Locale, formData: VeteransDataFormProps) => {
  const data: CreateVeteranResponse = await request(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
    getVeteranFormData,
    {
      locale: locale,
      name: formData.name,
      lastName: formData.lastName,
      city: formData.city,
      email: formData.email,
      phone: formData.phone,
      document_id: formData.identificationDocument,
      asks: formData.problem,
    },
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
    }
  );

  const id = data.createVeteran.data.id;
  return console.log(id);
};
