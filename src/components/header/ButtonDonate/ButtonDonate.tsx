'use client';

import { Button } from '@/components/buttons/Button';
import { useState } from 'react';

import ModalChildDonate from '@/components/ModalChildDonate/ModalChildDonate';
import Modal from '@/components/modal/Modal';
import { ButtonDonateProps } from './ButtonDonate.props';

export const ButtonDonate = ({
  headerButton,
  modal,
  buttonClassName,
  lang,
  modalDonateData,
}: ButtonDonateProps) => {
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
          className="inset:0 w-[768px] px-8 py-10 md:h-[624px]"
          modal={modal}
          modalClose={() => {
            setIsModalOpen(false);
          }}
        >
          <ModalChildDonate lang={lang} data={modalDonateData} />
        </Modal>
      )}
    </>
  );
};
