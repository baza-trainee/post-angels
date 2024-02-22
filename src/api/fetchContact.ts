import { request } from 'graphql-request';

import { Locale } from '@/i18n.config';
import { getContact } from './requests/getContact';
import { ContactDataType, ContactDataProps } from '@/sections/Contacts/Contacts.props';

export const fetchContact = async (locale: Locale): Promise<ContactDataProps> => {
  try {
    const data: ContactDataType = await request(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql` as string,
      getContact,
      {
        locale: locale,
      },
      {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GET_API}`,
      }
    );

    const result = data.contactsSection.data.attributes;

    return result;
  } catch (error) {
    return {
      phone: '',
      email: '',
      address: '',
      address_link: '',
      socials: [],
      image: [],
    } as any;
  }
};
