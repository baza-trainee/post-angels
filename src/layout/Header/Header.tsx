'use client';

import { Button } from '@/components/buttons/Button';
import { ICONS } from '@/components/icons';
import Link from 'next/link';

import { Dropdown } from '@/components/header/Dropdown';
import { Navigation } from '@/components/header/Navigation';
import Modal from '@/components/modal/Modal';
import ModalChildDonate from '@/layout/ModalChildDonate/ModalChildDonate';
import { useState } from 'react';
import { Logo } from '../Logo';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data, lang }) => {
  const { headerNav, headerButton, headerLanguageLabel } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="font-eUkraineHead text-base font-normal">
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b py-4 text-grey-80">
          <Link className="flex gap-x-2" href="/">
            <ICONS.HEADER_LOCATION className="h-6 w-6" />
            816 North Normandie ave., Los Angeles
          </Link>
          <Link className="flex gap-x-2" href="tel:+16572140272">
            <ICONS.HEADER_PHONE className="h-6 w-6" />
            +1 657-214-0272
          </Link>
          <Link className="flex gap-x-2" href="mailto:post.angeles.info@gmail.com">
            <ICONS.HEADER_MAIL className="h-6 w-6" />
            post.angeles.info@gmail.com
          </Link>
        </div>

        {/* Top Nav */}
        <div className="flex h-auto items-center justify-between border-b py-6">
          <Logo type="dark" lang={lang} />

          <div className="flex items-center gap-6 ">
            <Navigation headerNav={headerNav} />

            <div className="flex items-center">
              <Button className="mr-8" onClick={handleClick}>
                {headerButton.name}
              </Button>

              <Dropdown headerLanguageLabel={headerLanguageLabel} lang={lang} />
            </div>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            modalClose={() => {
              setIsModalOpen(false);
            }}
          >
            <ModalChildDonate />
          </Modal>
        )}
      </div>
    </header>
  );
};
