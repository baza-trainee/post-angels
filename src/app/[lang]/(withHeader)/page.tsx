import { Button } from '@/components/buttons/Button/Button';
import { IconButton } from '@/components/buttons/IconButton/IconButton';
import { LinkButton } from '@/components/buttons/LinkButton';
import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Contacts } from '@/sections/Contacts/Contacts';
import { Form } from '@/components/form/Form/Form';
import Link from 'next/link';
import { Hero } from '@/sections/Hero/Hero';
import { PartnersTop } from '@/sections/PartnersTop';
import { Partners } from '@/sections/Partners';

const getPartners = async (lang: Locale) => {
  // запит до базиданних за партнерами.
  // якщо партнерів немає повинно повертати null
  const partner = [
    { name: 'partners1', src: '/images/partners/partners-1.png' },
    { name: 'partners2', src: '/images/partners/partners-2.png' },
    { name: 'partners3', src: '/images/partners/partners-3.png' },
    { name: 'partners4', src: '/images/partners/partners-1.png' },
    { name: 'partners5', src: '/images/partners/partners-2.png' },
    { name: 'partners6', src: '/images/partners/partners-3.png' },
    { name: 'partners7', src: '/images/partners/partners-1.png' },
    { name: 'partners8', src: '/images/partners/partners-2.png' },
    { name: 'partners9', src: '/images/partners/partners-3.png' },
    { name: 'partners10', src: '/images/partners/partners-1.png' },
    { name: 'partners11', src: '/images/partners/partners-2.png' },
    { name: 'partners12', src: '/images/partners/partners-3.png' },
  ];

  if (partner.length <= 0) {
    return null;
  }
  return partner;
};

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { contacts, hero, partners } = common;
  const partnersData = await getPartners(lang);

  return (
    <main className="">
      {/* <section className=" py-[190px]">
        <div className="container">
          <Title tag="h1" variantSize="h1" className="" colorVariant="orange">
            Майбутнє в наших руках
          </Title>
          <Title tag="h4" variantSize="h4" className="" colorVariant="orange">
            Якийсь <span> заголовок</span>
          </Title>

          <Paragraph variantFontWeight="medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui eaque voluptatum corrupti
            quasi inventore assumenda error numquam mollitia, laborum natus modi itaque nihil omnis
            quidem explicabo repellendus consequatur iste corporis.
          </Paragraph>

          <Button variant="orange">Кнопка</Button>

          <IconButton label="кнопка">
            <ICONS.VERSEL className="h-20 w-20 fill-inherit" />
          </IconButton>

          <LinkButton href="#">Посилання</LinkButton>

          <ICONS.VERSEL className="h-20 w-20" />
          <Link href={`/projects/${1}`}>title</Link>
        </div>
      </section> */}
      <Hero data={hero} />
      {partnersData && <PartnersTop partnersData={partnersData} data={partners} />}
      {partnersData && <Partners partnersData={partnersData} data={partners} />}
      {/* <Contacts data={contacts} /> */}
      {/* <Form lang={lang} /> */}
    </main>
  );
}
