import { ICONS } from '@/components/icons';
import React from 'react';

const FooterPayments: React.FC = () => {
   
  return (
    <div className='sm:hidden xs:hidden md:flex md:mt-[50px] px-[100px]'>
         <ul
                  className={`mb-[50px] mt-[30px] flex  justify-between xl:flex-nowrap md:px-[100px] px-[150px] xl:px-[60px]  3xl:pl-[100px]`}
                >
                  <li className="flex w-[148px] items-center justify-center pb-[30px] pr-[9px] sm:w-2/4  md:mr-[80px] lg:mr-[100px] xl:mr-[200px] mr-[150px] 2xl:px-[100px]">
                    <ICONS.PRIVAT_BANK className="h-[22px]   w-[147px] cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex h-[22px] w-[148px] items-center justify-center sm:w-2/4  md:mr-[80px] mr-[150px] lg:mr-[100px] xl:mr-[200px] 2xl:mr-[100px]">
                    <ICONS.VISA className="h-[22px]   w-12 cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex h-[22px] w-[150px] items-center justify-center pr-[10px] sm:w-2/4  md:mr-[80px] mr-[150px] lg:mr-[100px] xl:mr-[200px] 2xl:px-[100px]">
                    <ICONS.MASTER_CARD className="h-[22px]   w-[79px] cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex h-[22px] w-[150px] items-center justify-center sm:w-2/4 ">
                    <ICONS.LIQPAY className="h-[21px]   w-[62px] cursor-pointer fill-grey-50" />
                  </li>
                </ul>
    </div>
  )
}
export default FooterPayments