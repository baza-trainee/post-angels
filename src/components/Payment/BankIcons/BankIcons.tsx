import { ICONS } from '@/components/icons';
import React from 'react';

const BankIcons: React.FC = () => {
  const beforeClass = `before:block before:w-[1px] before:h-[100%] before:bg-grey-60 before:absolute before:top-0 before:left-[50%] sm:before:block  xl:before:h-0 xl:before:w-0`;
  const afterClass = `after:block after:w-[100%] after:h-[1px] xl:after:hidden  after:bg-grey-60 after:absolute after:left-[0px] after:top-[50%]`;

  return (
    <ul
      className={`relative mb-[50px] mt-[30px] flex  flex-wrap justify-between xl:flex-nowrap ${beforeClass} ${afterClass} `}
    >
      <li className="w-[148px]duration-500 flex h-[68px]  items-center justify-center hover:fill-accent-primary  focus:fill-accent-primary  sm:w-1/2 xl:h-auto">
        <ICONS.PRIVAT_BANK className="h-[22px]   w-[147px] cursor-pointer fill-inherit " />
      </li>
      <li className="flex h-[68px] w-[148px] items-center justify-center duration-500 hover:fill-accent-primary focus:fill-accent-primary sm:w-1/2  xl:h-auto">
        <ICONS.VISA className="h-[22px]   w-12 cursor-pointer fill-inherit" />
      </li>
      <li className="flex h-[68px] w-[150px] items-center justify-center  duration-500 hover:fill-accent-primary focus:fill-accent-primary sm:w-1/2  xl:h-auto">
        <ICONS.MASTER_CARD className="h-[22px]   w-[79px] cursor-pointer fill-inherit" />
      </li>
      <li className="flex h-[68px] w-[150px] items-center justify-center duration-500 hover:fill-accent-primary focus:fill-accent-primary sm:w-1/2  xl:h-auto">
        <ICONS.LIQPAY className="h-[21px]   w-[62px] cursor-pointer fill-inherit" />
      </li>
    </ul>
  );
};

export default BankIcons;
