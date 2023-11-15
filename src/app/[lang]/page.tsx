import { Title } from '@/components/typography/Title';
import { ICONS } from '@/components/icons';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Button } from '@/components/buttons/Button/Button';
import { IconButton } from '@/components/buttons/IconButton/IconButton';
import { LinkButton } from '@/components/buttons/LinkButton';

export default function Home() {
  return (
    <main className="">
      <div className="font-eUkraine">
        <Title tag="h1" className="" colorVariant="orange">
          Головна
          <span> сторінка</span>
        </Title>
        <Title tag="h4" className="" colorVariant="orange">
          Якийсь заголовок
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
    </main>
  );
}
