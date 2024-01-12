import Image from 'next/image';

import { ContactsProps } from './Contacts.props';
import { ContactList } from '@/components/ContactList/';
import { Title } from '@/components/typography/Title';

import Partners from '../../../public/images/contacts.jpg';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { contactsSection } = data;
  return (
    <section className="py-[100px]">
      <div className="container flex justify-between md:gap-x-0 2xl:gap-x-[124px]">
        <div>
          <Title tag="h2" variantSize="h2" className="mb-[50px] ">
            {contactsSection.title}
            <span>
              <br /> {contactsSection.title1}
            </span>
          </Title>
          <ContactList />
        </div>

        <div className="hidden md:flex md:h-[416px] md:w-[349px] lg:w-[465px] xl:w-[687px]">
          <Image
            className="hidden rounded-2xl md:flex md:h-full md:w-full"
            src={Partners}
            alt={contactsSection.img.alt}
          />
        </div>
      </div>
    </section>
  );
};
