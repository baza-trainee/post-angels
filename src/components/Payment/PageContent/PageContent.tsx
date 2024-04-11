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
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (componentName: string) => {
    if (less1280px) {
      if (componentName === 'OneTime') {
        setComponent(
          <OneTimeComponent
            className={
              'xl:mr-[73px] xl:flex xl:w-1/2 active:xl:border-accent-primary  3xl:mr-[93px]'
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
    <div className="relative border-y border-grey-60 py-[30px] xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
      <div className=" mb-[30px] flex flex-col gap-y-4 xl:mb-0 xl:flex-row xl:justify-center">
        <button
          onClick={() => {
            handleClick('OneTime');
            setActiveButton('OneTime');
          }}
          className={
            activeButton === 'OneTime'
              ? 'mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-pressed hover:text-accent-primary xl:rounded-none xl:border-none xl:border-accent-primary xl:text-accent-pressed xl:underline active:xl:border-b-2'
              : 'mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-pressed hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-pressed '
          }
        >
          <span className="active:xl:border-b active:xl:border-accent-primary active:xl:decoration-solid">
            {OneTimeTextButton}
          </span>
        </button>
        <button
          onClick={() => {
            handleClick('Monthly');
            setActiveButton('Monthly');
          }}
          className={
            activeButton === 'Monthly'
              ? 'mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-pressed hover:text-accent-primary xl:rounded-none xl:border-none xl:border-accent-primary xl:text-accent-pressed xl:underline active:xl:border-b-2'
              : 'mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-pressed hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-pressed'
          }
        >
          <span className="active:xl:border-b active:xl:border-accent-primary">
            {MonthlyTextButton}
          </span>
        </button>
        {less1280px && component}
      </div>

      {bigger1280px && (
        <div className="flex flex-col xl:flex-row xl:gap-x-8">
          <OneTimeComponent
            className="xl:flex xl:w-1/2 active:xl:border-b active:xl:border-accent-primary 2xl:mr-[73px] 3xl:mr-[93px]"
            payments={payments}
            schema={schema}
          />
          <MonthlyComponent
            className="flex xl:w-1/2 active:xl:border-b active:xl:border-accent-primary"
            payments={payments}
            schema={schema}
          />
        </div>
      )}
    </div>
  );
};

export default PageContent;
