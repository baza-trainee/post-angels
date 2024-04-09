import { ICONS } from '@/components/icons';
import React from 'react';

const FooterPayments: React.FC = () => {
   
  return (
    <div className='hidden xl:flex py-[100px]'>
         <ul
                  className="mx-auto flex justify-between gap-x-[161px] xl:flex-nowrap"
                >
                  <li className="flex items-center justify-center">
                    <ICONS.PRIVAT_BANK className="h-[22px] w-[147px] cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex items-center justify-center">
                    <ICONS.VISA className="h-[22px] w-12 cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex items-center justify-center">
                    <ICONS.MASTER_CARD className="h-[22px] w-[79px] cursor-pointer fill-grey-50" />
                  </li>
                  <li className="flex items-center justify-center">
                    <ICONS.LIQPAY className="h-[21px] w-[62px] cursor-pointer fill-grey-50" />
                  </li>
                </ul>
    </div>
  )
}
export default FooterPayments