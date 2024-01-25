import { ContactList } from '@/components/ContactList';
import { ICONS } from '@/components/icons';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Partners from '../../../../../public/images/contacts-map.jpg';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { contactsSection } = common.contacts;

  return (
    <section className="mb-[100px] mt-[102px] xl:mt-[62px]">
      <div className="container">
        <div className="flex flex-col gap-y-[30px] border-b border-grey-60 pb-10">
          <Title tag="h2" variantSize="h2" className="flex">
            <p>{contactsSection.title} &zwnj;</p>
            <span>{contactsSection.accentTitle}</span>
          </Title>
          <ContactList />

          <div className="relative">
            <Image
              className="rounded-2xl "
              src={Partners}
              width={790}
              height={540}
              alt={contactsSection.img.alt}
            />
            <div className="absolute right-[31%] top-[32%] h-10 w-10 sm:h-[60px] sm:w-[60px] ">
              <ICONS.LOGO_SMALL />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
