import Image from 'next/image';

import { ContactsProps } from './Contacts.props';
import { ContactList } from '@/components/ContactList/';
import { Title } from '@/components/typography/Title';

import Partners from '../../../public/images/contacts.jpg';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <section className="py-[100px]">
      <div className="container flex justify-between">
        <div>
          <Title
            tag="h2"
            variantSize="h2"
            colorVariant="accent"
            className="mb-[50px] text-3xl xl:mb-[57px]"
          >
            {contactsSection.title}
            <span>
              <br /> {contactsSection.title1}
            </span>
          </Title>
          <ContactList />
        </div>

        <Image
          className="hidden rounded-2xl md:flex md:h-auto md:w-[349px] lg:w-[465px] xl:w-[687px]"
          src={Partners}
          alt={contactsSection.img.alt}
        />
      </div>
    </section>
  );
};
