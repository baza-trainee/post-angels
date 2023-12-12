import { Button } from '@/components/buttons/Button/Button';
import { IconButton } from '@/components/buttons/IconButton/IconButton';
import { LinkButton } from '@/components/buttons/LinkButton';
import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Contacts } from '@/sections/Contacts/Contacts';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { contacts } = common;

  return (
    <main className="">
      <section className=" py-[190px]">
        <div className="container">
          <Title tag="h1" className="" colorVariant="orange">
            Майбутнє в наших руках
          </Title>
          <Title tag="h4" className="" colorVariant="orange">
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
        </div>
      </section>
      <Contacts data={contacts} />
    </main>
  );
}
