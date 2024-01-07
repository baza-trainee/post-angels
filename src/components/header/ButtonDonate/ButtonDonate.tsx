'use client';

import { Button } from '@/components/buttons/Button';
import { useState } from 'react';

import ModalChildDonate from '@/components/ModalChildDonate/ModalChildDonate';
import Modal from '@/components/modal/Modal';
import { ButtonDonateProps } from './ButtonDonate.props';

export const ButtonDonate = ({ headerButton, modal, buttonClassName }: ButtonDonateProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button className={buttonClassName} onClick={handleClick}>
        {headerButton.name}
      </Button>

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
    </>
  );
};
