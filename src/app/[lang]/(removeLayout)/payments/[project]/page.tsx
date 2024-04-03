import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { Locale } from '@/i18n.config';
import { Button } from '../../../../../components/buttons/Button/Button';
import OneTimeAssistanceForm from '@/components/Payment/PaymentForm/OneTimeAssistanceForm';
import MonthlyAssistanceForm from '@/components/Payment/PaymentForm/MonthlyAssistanceForm';
import { Logo } from '@/layout/Logo';
import { getDictionary } from '@/lib/dictionary';
import FooterPayments from '@/components/Payment/Footer/FooterPayments';
export const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { payments} = common
  const {needToCollect, title, OneTimeTextButton, MonthlyTextButton,} = common.payments
  return (
    <div className="container ">
      <div className="mb-10">
      <div className="mb-5 flex">
  <div className='md:my-auto md:flex xs:hidden sm:hidden mt-[40px] xl:mt-[50px] lg:mt-[50px]'>
    <Logo variantSize='big' type='dark' logo={{
      label: '',
      href: ''
    }} />
  </div>

  <div className='md:ml-[100px] mt-[40px] ml-0 xl:ml-[120px] lg:mt-[50px] xl:mt-[50px] 2xl:ml-[250px] 3xl:ml-[500px]'>
    <div>
      <Title variantSize="h4" className='break-words'>{title}</Title>
    </div>
    <div>
      <Paragraph variant="orange">{needToCollect}</Paragraph>
    </div>
  </div>
</div>
      </div>
      <div className="relative border-y border-grey-60 py-[30px] xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
        <div className=" flex flex-col gap-y-4 xl:flex-row xl:justify-center">
          <button className="active:xl:border-b-accent-hover w-full  rounded-2xl border border-grey-60 py-3 hover:border-accent-hover  xl:rounded-none xl:border-none xl:text-accent-pressed">
            {OneTimeTextButton}
          </button>
          <button className="mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-hover hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-pressed active:xl:border-b-accent-hover">
            {MonthlyTextButton}
          </button>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-x-8">
          <OneTimeAssistanceForm  className="hidden xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]" payments={payments} />
          <MonthlyAssistanceForm  className=" flex xl:w-1/2 " payments={payments}  />
        </div>
      </div>
      
    </div>
  );
};

export default page;
