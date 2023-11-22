'use client';
import Image from 'next/image';

import { ContactsProps } from '../../sections/Contacts/Contacts.props';
import { ContactList } from '@/components/СontactList/ContactList';

import Partners from '../../../public/images/Contacts.jpg';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <section className="container flex pt-[100px]">
      <ContactList data={data} />
      <div className="mx-auto flex pl-[140px]">
        <Image
          className="rounded-2xl"
          src={Partners}
          width={688}
          height={458}
          alt={contactsSection[0].alt}
        />
      </div>
    </section>
  );
};
