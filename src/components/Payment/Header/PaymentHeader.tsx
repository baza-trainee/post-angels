
import { Logo } from '@/layout/Logo';
import { HeaderProps } from '@/layout/Header/Header.props';
import React from "react";

export const PaymentHeader: React.FC<HeaderProps> = ({logo}) => {
  return (
    <header
      id="header"
      className={`bg-grey-20'  inset-x-0 top-0 z-50 font-eUkraineHead text-base font-normal`}
    >
      <div className="container">
        <div className="flex h-auto items-center xl:border-none  border-b border-grey-60 py-4 text-grey-80 hover:[&>*]:text-orange focus:[&>*]:text-orange md:hidden">
          <div className='flex justify-center w-full md:hidden'>
            <Logo type='dark' logo={logo} variantSize='big' />
          </div>
        </div>

        <div className="hidden h-auto items-center justify-between border-b border-grey-60 py-6  ">
          <Logo type="dark" logo={logo} variantSize="big" />

        </div>
      </div>
    </header>
  );
};
