'use client';

import { Button } from '@/components/buttons/Button';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    let lastScrollTop = 0;
    const targetElement = document.getElementById('header');
    const topHeader = document.getElementById('top_header');

    if (!targetElement || !topHeader) {
      console.error('Target elements not found');
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        targetElement.classList.remove('xl:translate-y-0');
        targetElement.classList.add('xl:translate-y-[-60px]');
        topHeader.classList.add('xl:py-4');
      } else {
        // Scrolling up
        targetElement.classList.remove('xl:translate-y-[-60px]');
        targetElement.classList.add('xl:translate-y-0');
        topHeader.classList.remove('xl:py-4');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
