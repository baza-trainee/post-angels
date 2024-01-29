import { ContactList } from '@/components/ContactList';
import { ICONS } from '@/components/icons';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { contactsSection } = common.contacts;

  return (
    <section className="mb-[100px] mt-[102px] xl:mt-[284px]">
      <div className="container">
        <div className="flex flex-col gap-[30px] border-b border-grey-60 pb-10 xl:flex-row xl:justify-between xl:pb-[140px]">
          <div className="flex flex-col gap-y-[30px] xl:gap-y-12">
            <Title tag="h1" variantSize="h2" className="flex">
              {contactsSection.title} &zwnj;
              <span>{contactsSection.title1}</span>
            </Title>
            <ContactList />
          </div>

          <div className="relative">
            <Image
              className="rounded-2xl object-cover object-center saturate-0 transition-all delay-150 hover:saturate-100"
              src={contactsSection.img.src}
              width={990}
              height={740}
              alt={contactsSection.img.alt}
            />
            <div className="absolute right-[31%] top-[32%] h-10 w-10 md:h-[60px] md:w-[60px]">
              <ICONS.PRIMARY_LOGO_ICON />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
