'use client';

import { Button } from '@/components/buttons/Button';
import { useState } from 'react';

import ModalChildDonate from '@/components/ModalChildDonate/ModalChildDonate';
import Modal from '@/components/modal/Modal';
import { ButtonDonateProps } from './ButtonDonate.props';
import useBreakpoints from '@/utils/useBreakpoints';

export const ButtonDonate = ({
  headerButton,
  modal,
  buttonClassName,
  lang,
  modalDonateData,
}: ButtonDonateProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { bigger1000px } = useBreakpoints();

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
          className="px-8 py-14 md:h-[624px] md:w-[768px] md:py-12  lg:py-20"
          iconClassName=" right-[20px] top-[20px]  md:right-10"
          modal={modal}
          scroll={bigger1000px ? false : true}
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
