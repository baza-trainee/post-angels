import Image from 'next/image';

import { ContactsProps } from './Contacts.props';
import { ContactList } from '@/components/ContactList/';
import { Title } from '@/components/typography/Title';

import Partners from '../../../public/images/contacts.jpg';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <section className="py-[100px]">
      <div className="container flex justify-between	">
        <div>
          <Title tag="h2" variantSize="h2" colorVariant="accent" className="pb-[50px] ">
            {contactsSection.title}
            <span>
              <br /> {contactsSection.title1}
            </span>
          </Title>
          <ContactList />
        </div>

        <Image
          className="rounded-2xl"
          src={Partners}
          width={688}
          height={458}
          alt={contactsSection.img.alt}
        />
      </div>
    </section>
  );
};
