import { ICONS } from '@/components/icons';
import React from 'react';

const BankIcons: React.FC = () => {
    const beforeClass = `before:block before:w-[1px] before:h-[12%] before:bg-grey-60 before:absolute before:top-[760px] before:left-[50%] sm:before:block sm:before:w-[1px] sm:before:h-[15%] sm:before:bg-grey-60 sm:before:absolute sm:before:top-[710px] sm:before:left-[52%] md:before:block md:before:w-[1px] md:before:h-[116px] md:before:bg-grey-60 md:before:absolute md:before:top-[710px] md:before:left-[52%] xl:before:h-0 xl:before:w-0`;
    const afterClass = `after:block after:w-[320px] xl:after:w-[1px] after:h-[1px]  after:bg-grey-60 after:absolute after:left-[0px] after:top-[800px] xl:after:top-0 sm:after:block sm:after:w-[90%] sm:after:h-[1px] sm:after:bg-grey-60 sm:after:absolute sm:after:left-[14px] sm:after:top-[774px] md:after:top-[754px] md:after:left-[38px] xl:after:w-0 xl:after:h-0`;

  return (
    <div>
         <ul
                  className={`mb-[50px] mt-[30px] flex  flex-wrap justify-between xl:flex-nowrap ${beforeClass} ${afterClass} `}
                >
                  <li className="flex w-[148px] items-center justify-center pb-[30px] pr-[9px] sm:w-2/4  hover:fill-accent-primary focus:fill-accent-primary">
                    <ICONS.PRIVAT_BANK className="h-[22px]   w-[147px] cursor-pointer fill-inherit " />
                  </li>
                  <li className="flex h-[22px] w-[148px] items-center justify-center sm:w-2/4  hover:fill-accent-primary focus:fill-accent-primary">
                    <ICONS.VISA className="h-[22px]   w-12 cursor-pointer fill-inherit" />
                  </li>
                  <li className="flex h-[22px] w-[150px] items-center justify-center pr-[10px] sm:w-2/4  hover:fill-accent-primary focus:fill-accent-primary">
                    <ICONS.MASTER_CARD className="h-[22px]   w-[79px] cursor-pointer fill-inherit" />
                  </li>
                  <li className="flex h-[22px] w-[150px] items-center justify-center sm:w-2/4  hover:fill-accent-primary focus:fill-accent-primary">
                    <ICONS.LIQPAY className="h-[21px]   w-[62px] cursor-pointer fill-inherit" />
                  </li>
                </ul>
    </div>
  )
}

export default BankIcons