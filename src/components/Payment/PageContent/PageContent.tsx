'use client';
import { useState } from 'react';
import { Payments, SchemaTypes } from '../Payments.props';
import useBreakpoints from '@/utils/useBreakpoints';
import OneTimeAssistanceForm from '../PaymentForm/OneTimeAssistanceForm/OneTimeAssistanceForm';
import MonthlyAssistanceForm from '../PaymentForm/MonthlyAssistanceForm/MonthlyAssistanceForm';

const PageContent = ({ payments, schema }: { payments: Payments; schema: SchemaTypes }) => {
  const { OneTimeTextButton, MonthlyTextButton } = payments;
  const { less1280px, bigger1280px } = useBreakpoints();
  const [activeButton, setActiveButton] = useState('OneTime');

  return (
    <div className="relative border-t  border-grey-60 py-[30px] xl:border-y xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
      <div className=" flex flex-col  xl:mb-0 xl:flex-row xl:justify-center xl:gap-x-8 2xl:gap-x-[148px] 3xl:gap-x-[188px]">
        <button
          onClick={() => {
            setActiveButton('OneTime');
          }}
          className={`relative mb-[30px] w-full rounded-2xl border-2 py-[14px] transition-all duration-500 hover:border-accent-primary hover:text-accent-primary focus:border-accent-primary focus:text-accent-primary xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
            activeButton === 'OneTime'
              ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2'
              : 'border-grey-60'
          } `}
        >
          {OneTimeTextButton}
        </button>
        <button
          onClick={() => {
            setActiveButton('Monthly');
          }}
          className={` relative mb-[30px] w-full  rounded-2xl border-2 py-[14px] transition-all duration-500 hover:border-accent-primary  hover:text-accent-primary  focus:border-accent-primary focus:text-accent-primary  xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
            activeButton === 'Monthly'
              ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2 '
              : 'border-grey-60'
          }`}
        >
          {MonthlyTextButton}
        </button>

        {less1280px && activeButton === 'OneTime' && (
          <OneTimeAssistanceForm
            isDisabled={false}
            payments={payments}
            schema={schema}
            className="xl:mr-[73px] xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]"
          />
        )}
      </div>

      {less1280px && activeButton === 'Monthly' && (
        <MonthlyAssistanceForm
          isDisabled={false}
          payments={payments}
          schema={schema}
          className="flex xl:w-1/2  active:xl:border-accent-primary"
        />
      )}

      {bigger1280px && (
        <div className="flex flex-col justify-between xl:flex-row xl:gap-x-8">
          <OneTimeAssistanceForm
            className="xl:flex xl:w-1/2  2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
            payments={payments}
            schema={schema}
            isDisabled={activeButton === 'Monthly'}
          />
          <MonthlyAssistanceForm
            className="flex xl:w-1/2  2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
            payments={payments}
            schema={schema}
            isDisabled={activeButton === 'OneTime'}
          />
        </div>
      )}
    </div>
  );
};

export default PageContent;
