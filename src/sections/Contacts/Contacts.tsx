import Image from 'next/image';

import { ContactList } from '@/components/ContactList/';
import { Title } from '@/components/typography/Title';
import { ContactsProps } from './Contacts.props';

import { fetchContact } from '@/api/fetchContact';
import Partners from '../../../public/images/contacts.png';

export const Contacts: React.FC<ContactsProps> = async ({ data, lang }) => {
  const contactData = await fetchContact(lang);
  const { contactsSection } = data;
  return (
    <section className="py-[100px]" id="contacts">
      <div className="container flex justify-between md:gap-x-0 2xl:gap-x-[124px]">
        <div>
          <Title tag="h2" variantSize="h2" className="mb-[50px] ">
            {contactsSection.title}
            <span>
              <br /> {contactsSection.title1}
            </span>
          </Title>
          <ContactList data={contactData} />
        </div>

        <div className="relative saturate-0 transition-all delay-150 hover:saturate-100 md:h-[416px] md:w-[349px] lg:w-[465px] xl:w-[687px] 2xl:h-[468px] 2xl:w-[664px] 3xl:h-[698px] 3xl:w-[1216px] notMd:hidden">
          <Image
            src={Partners || ''}
            alt={contactsSection.img.alt || 'background image'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
