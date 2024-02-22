import { Locale } from '@/i18n.config';

export interface ContactsProps {
  data: {
    contactsSection: {
      title: string;
      title1: string;
      href: string;
      img: {
        alt: string;
      };
    };
  };
  lang: Locale;
}

export interface ContactDataType {
  contactsSection: {
    data: {
      attributes: ContactDataProps;
    };
  };
}

export interface ContactDataProps {
  phone: string;
  email: string;
  address: string;
  address_link: string;
  socials: ContactSocialProps[];
  image: ContactImgProps[];
}

export interface ContactSocialProps {
  link: string;
  name: string;
}

export interface ContactImgProps {
  id: string;
  alt: string;
  src: [Object];
}
