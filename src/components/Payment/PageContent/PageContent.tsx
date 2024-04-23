'use client';
import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import { Payments, SchemaTypes } from '../Payments.props';
import useBreakpoints from '@/utils/useBreakpoints';

const PageContent = ({ payments, schema }: { payments: Payments; schema: SchemaTypes }) => {
  const { OneTimeTextButton, MonthlyTextButton } = payments;
  const OneTimeComponent = dynamic(
    () => import('../PaymentForm/OneTimeAssistanceForm/OneTimeAssistanceForm')
  );
  const MonthlyComponent = dynamic(
    () => import('../PaymentForm/MonthlyAssistanceForm/MonthlyAssistanceForm')
  );
  const { less1280px, bigger1280px } = useBreakpoints();
  const [component, setComponent] = useState<ReactNode>(
    <OneTimeComponent
      className={'xl:mr-[73px] xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]'}
      payments={payments}
      schema={schema}
    />
  );
  const [activeButton, setActiveButton] = useState('OneTime');

  const handleClick = (componentName: string) => {
    if (less1280px) {
      if (componentName === 'OneTime') {
        setComponent(
          <OneTimeComponent
            className={
              'xl:mr-[73px] xl:flex xl:w-1/2 active:xl:border-accent-primary   3xl:mr-[93px]'
            }
            payments={payments}
            schema={schema}
          />
        );
      } else if (componentName === 'Monthly') {
        setComponent(
          <MonthlyComponent
            className={'flex xl:w-1/2  active:xl:border-accent-primary'}
            payments={payments}
            schema={schema}
          />
        );
      }
    }
  };

  return (
    <div className="relative border-t  border-grey-60 py-[30px] xl:border-y xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
      <div className=" flex flex-col gap-y-[30px] xl:mb-0 xl:flex-row xl:justify-center xl:gap-x-8 2xl:gap-x-[148px] 3xl:gap-x-[188px]">
        <button
          onClick={() => {
            handleClick('OneTime');
            setActiveButton('OneTime');
          }}
          className={`relative w-full rounded-2xl border-2 py-[14px]  transition-all duration-500 hover:border-accent-primary hover:text-accent-primary focus:border-accent-primary focus:text-accent-primary xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
            activeButton === 'OneTime'
              ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2'
              : 'border-grey-60'
          } `}
        >
          {OneTimeTextButton}
        </button>
        <button
          onClick={() => {
            handleClick('Monthly');
            setActiveButton('Monthly');
          }}
          className={` relative w-full rounded-2xl border-2 py-[14px] transition-all duration-500 hover:border-accent-primary  hover:text-accent-primary  focus:border-accent-primary focus:text-accent-primary  xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
            activeButton === 'Monthly'
              ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2'
              : 'border-grey-60'
          }`}
        >
          {MonthlyTextButton}
        </button>

        {less1280px && component}
      </div>

      {bigger1280px && (
        <div className="flex flex-col xl:flex-row xl:justify-between xl:gap-x-8">
          <OneTimeComponent
            className="xl:flex xl:w-1/2  2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
            payments={payments}
            schema={schema}
          />
          <MonthlyComponent
            className="flex xl:w-1/2  2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
            payments={payments}
            schema={schema}
          />
        </div>
      )}
    </div>
  );
};

export default PageContent;
