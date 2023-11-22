'use client';

import { Button } from '@/components/buttons/Button/Button';
import { IconButton } from '@/components/buttons/IconButton/IconButton';
import { LinkButton } from '@/components/buttons/LinkButton';
import { ICONS } from '@/components/icons';
import Modal from '@/components/modal/Modal';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title';

import ModalDonate from '@/layout/ModalDonate/ModalDonate';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <main className="">
      <div className="">
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

        <Button variant="orange" onClick={handleClick}>
          Кнопка
        </Button>

        <IconButton label="кнопка">
          <ICONS.VERSEL className="h-20 w-20 fill-inherit" />
        </IconButton>

        <LinkButton href="#">Посилання</LinkButton>

        <ICONS.VERSEL className="h-20 w-20" />
      </div>

      {showModal && (
        <Modal
          children={<ModalDonate />}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </main>
  );
}
