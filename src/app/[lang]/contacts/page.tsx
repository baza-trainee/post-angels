import { ContactList } from '@/components/ContactList';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Partners from '../../../../public/images/contacts-map.jpg';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { contactsSection } = common.contacts;

  return (
    <section className="mb-72 mt-[258px]">
      <div className="container flex justify-between border-b pb-[140px]">
        <div>
          <Title tag="h2" colorVariant="accent" className="pb-[50px] ">
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
          width={790}
          height={540}
          alt={contactsSection.img.alt}
        />
      </div>
    </section>
  );
};

export default page;
