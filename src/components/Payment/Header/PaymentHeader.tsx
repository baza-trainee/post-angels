import { ICONS } from '@/components/icons';
import Link from 'next/link';

import MobileNav from '@/components/header/MobileNav/MobileNav';
import { Logo } from '@/layout/Logo';
import { fetchContact } from '@/api/fetchContact';
import { HeaderProps } from '@/layout/Header/Header.props';

export const PaymentHeader: React.FC<HeaderProps> = async ({ logo }) => {
  return (
    <header
      id="header"
      className={`bg-grey-20'  inset-x-0 top-0 z-50 font-eUkraineHead text-base font-normal`}
    >
      <div className="container">
        {/* Upper Nav */}
        <div className="flex h-auto items-center xl:border-none  border-b border-grey-60 py-4 text-grey-80 hover:[&>*]:text-orange focus:[&>*]:text-orange md:hidden">
          {/* icon before 1000px */}
          <div className='flex justify-center w-full md:hidden'>
            <Logo type='dark' logo={logo} variantSize='big' />
          </div>
        </div>

        {/* Top Nav */}
        <div className="hidden h-auto items-center justify-between border-b border-grey-60 py-6  ">
          <Logo type="dark" logo={logo} variantSize="big" />

        </div>
      </div>
    </header>
  );
};
