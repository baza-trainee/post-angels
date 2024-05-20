import { request } from 'graphql-request';
import { getModalDonateData } from './requests/getModalDonateData';

export const fetchModalDonateData = async (formData: any) => {
  const data: any = await request(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
    getModalDonateData,
    {
      name: formData.name,
      sum: formData.sum,
      currency: formData.currency,
      date: formData.date,
    },
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_POST_API}`,
    }
  );

  const id = data['support-data'].data.id;
  return console.log(id);
};
