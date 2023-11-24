'use client';

import { useState } from 'react';
import { Button } from '@/components/buttons/Button';
import { Dropdown } from '@/components/header/Dropdown';

import Modal from '@/components/modal/Modal';
import ModalChildDonate from '@/components/ModalChildDonate/ModalChildDonate';
import { ButtonListProps } from './ButtonList.props';

export const ButtonList = ({ lang, headerButton, headerLanguageLabel, modal }: ButtonListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-center">
      <Button className="mr-8" onClick={handleClick}>
        {headerButton.name}
      </Button>

      <Dropdown headerLanguageLabel={headerLanguageLabel} lang={lang} />

      {isModalOpen && (
        <Modal
          modal={modal}
          modalClose={() => {
            setIsModalOpen(false);
          }}
        >
          <ModalChildDonate />
        </Modal>
      )}
    </div>
  );
};
