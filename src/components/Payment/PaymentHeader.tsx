import { ICONS } from '@/components/icons';
import Link from 'next/link';

import MobileNav from '@/components/header/MobileNav/MobileNav';
import { Logo } from '@/layout/Logo';
import { fetchContact } from '@/api/fetchContact';
import { HeaderProps } from '@/layout/Header/Header.props';

export const PaymentHeader: React.FC<HeaderProps> = async ({ data, lang, modal, logo }) => {
  const { headerNav, buttons } = data;
  const contactData = await fetchContact(lang);
  return (
    <header
      id="header"
      className={`bg-grey-20' fixed inset-x-0 top-0 z-50 font-eUkraineHead text-base font-normal`}
    >
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center justify-between border-b border-grey-60 py-4 text-grey-80 hover:[&>*]:text-orange focus:[&>*]:text-orange">
          {/* icon before 1000px */}
          <div className="h-10 w-10 xl:hidden">
            <Logo type="light" logo={logo} variantSize="small" />
          </div>

          {/* tel number */}
          <Link
            rel="nofollow noreferrer"
            target="_blank"
            className="flex gap-x-2"
            href={`tel:${contactData.phone}`}
          >
            <ICONS.HEADER_PHONE className="h-6 w-6" />
            {contactData.phone}
          </Link>
          {/* mail after 1000px */}

          {/* mobile nav before 1000px */}
          <MobileNav
            lang={lang}
            headerNav={headerNav}
            buttons={buttons}
            modal={modal}
            logo={logo}
          />
        </div>

        {/* Top Nav */}
        <div className="hidden h-auto items-center justify-between border-b border-grey-60 py-6 xl:flex ">
          <Logo type="dark" logo={logo} variantSize="big" />

          <div className="flex items-center gap-6 ">
            {/* <Navigation headerNav={headerNav} /> */}
            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
