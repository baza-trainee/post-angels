import { ICONS } from '@/components/icons';
import Link from 'next/link';

import { Navigation } from '@/components/header/Navigation';

import { ButtonDonate } from '@/components/header/ButtonDonate';
import { Dropdown } from '@/components/header/Dropdown';
import MobileNav from '@/components/header/MobileNav/MobileNav';
import { Logo } from '@/layout/Logo';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data, lang, modal }) => {
  const { headerNav, headerButton, headerLanguageLabel, headerLanguageName } = data;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-eUkraineHead text-base font-normal backdrop-blur-[3px]`}
    >
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b border-grey-60 py-4 text-grey-80 hover:[&>*]:text-orange focus:[&>*]:text-orange">
          {/* icon before 1000px */}
          <div className="h-10 w-10 lg:hidden">
            <ICONS.LOGO_ICON />
          </div>
          {/* address afret 1000px */}
          <Link className="hidden gap-x-2 lg:flex" href="/">
            <ICONS.HEADER_LOCATION className="h-6 w-6" />
            816 North Normandie ave., Los Angeles
          </Link>
          {/* tel number */}
          <Link className="flex gap-x-2" href="tel:+16572140272">
            <ICONS.HEADER_PHONE className="h-6 w-6" />
            +1 657-214-0272
          </Link>
          {/* mail after 1000px */}
          <Link className="hidden gap-x-2 lg:flex" href="mailto:post.angeles.info@gmail.com">
            <ICONS.HEADER_MAIL className="h-6 w-6" />
            post.angeles.info@gmail.com
          </Link>
          {/* mobile nav before 1000px */}
          <MobileNav
            lang={lang}
            headerNav={headerNav}
            headerLanguageName={headerLanguageName}
            headerButton={headerButton}
            headerLanguageLabel={headerLanguageLabel}
            modal={modal}
          />
        </div>

        {/* Top Nav */}
        <div className="hidden h-auto items-center justify-between border-b border-grey-60 py-6 lg:flex ">
          <div className="hidden lg:flex">
            <Logo type="dark" lang={lang} />
          </div>

          <div className="flex items-center gap-6 ">
            <Navigation headerNav={headerNav} />
            <div className="flex items-center">
              <ButtonDonate headerButton={headerButton} modal={modal} buttonClassName="mr-8" />
              <Dropdown headerLanguageLabel={headerLanguageLabel} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
