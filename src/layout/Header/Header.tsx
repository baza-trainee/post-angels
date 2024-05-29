import { ICONS } from '@/components/icons';
import Link from 'next/link';

import { Navigation } from '@/components/header/Navigation';

import { fetchContact } from '@/api/fetchContact';
import { ButtonDonate } from '@/components/header/ButtonDonate';
import { Dropdown } from '@/components/header/Dropdown';
import MobileNav from '@/components/header/MobileNav/MobileNav';
import { Logo } from '@/layout/Logo';
import { getDictionary } from '@/lib/dictionary';
import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = async ({ data, lang, modal, logo, transparent }) => {
  const { headerNav, buttons } = data;
  const contactData = await fetchContact(lang);
  const { common } = await getDictionary(lang);
  const { donateModal } = common;

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-50 ${
        transparent ? 'backdrop-blur-[3px]' : 'bg-grey-20'
      }  font-eUkraineHead text-base font-normal`}
    >
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b border-grey-60 py-4 text-grey-80 hover:[&>*]:text-orange focus:[&>*]:text-orange">
          {/* icon before 1000px */}
          <div className="h-10 w-10 xl:hidden">
            <Logo type="light" logo={logo} variantSize="small" />
          </div>

          {/* address afret 1000px */}
          <Link
            className="hidden gap-x-2 fill-grey-100 hover:fill-orange xl:flex "
            href={contactData.address_link}
            rel="nofollow noreferrer"
            target="_blank"
          >
            <ICONS.HEADER_LOCATION className="h-6 w-6 fill-inherit" />
            {contactData.address}
          </Link>
          {/* tel number */}
          <Link
            rel="nofollow noreferrer"
            target="_blank"
            className="flex gap-x-2 stroke-grey-100 hover:stroke-orange"
            href={`tel:${contactData.phone}`}
          >
            <ICONS.HEADER_PHONE className="h-6 w-6 stroke-[inherit]" />
            {contactData.phone}
          </Link>
          {/* mail after 1000px */}
          <Link
            rel="nofollow noreferrer"
            target="_blank"
            className="hidden gap-x-2 fill-grey-100 hover:fill-orange xl:flex"
            href={`mailto:${contactData.email}`}
          >
            <ICONS.HEADER_MAIL className="h-6 w-6 fill-inherit" />
            {contactData.email}
          </Link>
          {/* mobile nav before 1000px */}
          <MobileNav
            lang={lang}
            headerNav={headerNav}
            buttons={buttons}
            modal={modal}
            logo={logo}
            modalDonateData={donateModal}
          />
        </div>

        {/* Top Nav */}
        <div className="hidden h-auto items-center justify-between border-b border-grey-60 py-6 xl:flex ">
          <Logo type="dark" logo={logo} />

          <Navigation headerNav={headerNav} />
          <div className="flex items-center">
            <ButtonDonate
              headerButton={buttons.headerButton}
              modal={modal}
              modalDonateData={donateModal}
              buttonClassName="mr-[14px] !px-[38px] !w-[222px]"
              lang={lang}
            />
            <Dropdown headerLanguageLabel={buttons.headerLanguageLabel} lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
};
