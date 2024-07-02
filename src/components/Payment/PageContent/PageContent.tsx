'use client';
import { PageContentProps } from '@/components/Payment/PageContent/PageContent.props';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { Logo } from '@/layout/Logo';
import { ProjectDataProps } from '@/sections/ProjectPage/ProjectPage.props';
import useBreakpoints from '@/utils/useBreakpoints';
import { useState } from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';

const PageContent = ({
  dictionary,
  payments,
  schema,
  projectDataInfo,
  logo,
  lang,
}: PageContentProps & {
  projectDataInfo: ProjectDataProps;
  lang: Locale;
  logo: { label: string; href: string };
}) => {
  const { OneTimeTextButton, MonthlyTextButton } = payments;
  const { less1280px, bigger1280px } = useBreakpoints();
  const [activeButton, setActiveButton] = useState('once');

  return (
    <>
      <div className="mb-10">
        <div className="mb-5 flex">
          <div className="mt-[40px] xs:hidden sm:hidden md:my-auto md:flex lg:mt-[50px] xl:mt-[50px]">
            <Logo variantSize="big" type="dark" logo={logo} />
          </div>

          <div className="ml-0 mt-[40px] md:ml-[100px] lg:mt-[50px] xl:ml-[120px] xl:mt-[50px] 2xl:ml-[250px] 3xl:ml-[500px]">
            <Title variantSize="h4" className="mb-5 break-words xs:text-center sm:text-start">
              {projectDataInfo?.title}
            </Title>
            <div className="flex flex-col xs:text-center sm:flex-row">
              <Paragraph variant="orange" className="sm:mr-[4px]">
                {payments.needToCollect}
              </Paragraph>
              <div className="flex xs:justify-center">
                <Paragraph variant="orange" className="xs:mr-[4px]">
                  {projectDataInfo ? projectDataInfo?.all - projectDataInfo?.collected : ''}
                </Paragraph>
                <Paragraph variant="orange">{payments.currency}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t  border-grey-60 py-[30px] xl:border-y xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
        <div className=" flex flex-col  xl:mb-0 xl:flex-row xl:justify-center xl:gap-x-8 2xl:gap-x-[148px] 3xl:gap-x-[188px]">
          <button
            onClick={() => {
              setActiveButton('once');
            }}
            className={`relative mb-[30px] w-full rounded-2xl border-2 py-[14px] transition-all duration-500 hover:border-accent-primary hover:text-accent-primary focus:border-accent-primary focus:text-accent-primary xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
              activeButton === 'once'
                ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2'
                : 'border-grey-60'
            } `}
          >
            {OneTimeTextButton}
          </button>
          <button
            onClick={() => {
              setActiveButton('monthly');
            }}
            className={` relative mb-[30px] w-full  rounded-2xl border-2 py-[14px] transition-all duration-500 hover:border-accent-primary  hover:text-accent-primary  focus:border-accent-primary focus:text-accent-primary  xl:border-none xl:text-accent-primary xl:underline-offset-2 hover:xl:underline focus:xl:underline ${
              activeButton === 'monthly'
                ? ' border-accent-primary text-accent-primary xl:underline xl:underline-offset-2 '
                : 'border-grey-60'
            }`}
          >
            {MonthlyTextButton}
          </button>
        </div>

        {less1280px && (
          <PaymentForm
            regularMode={activeButton}
            lang={lang}
            projectTitle={projectDataInfo.title}
            dictionary={dictionary}
            isDisabled={false}
            schema={schema}
            className="flex xl:w-1/2  active:xl:border-accent-primary"
          />
        )}

        {bigger1280px && (
          <div className="flex flex-col justify-between xl:flex-row xl:gap-x-8">
            <PaymentForm
              regularMode={'once'}
              lang={lang}
              projectTitle={projectDataInfo.title}
              dictionary={dictionary}
              className="flex xl:w-1/2 2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
              schema={schema}
              isDisabled={activeButton === 'monthly'}
            />
            <PaymentForm
              regularMode={'monthly'}
              lang={lang}
              projectTitle={projectDataInfo.title}
              dictionary={dictionary}
              className="flex xl:w-1/2 2xl:w-[calc(50%_-_74px)] 3xl:w-[calc(50%_-_94px)]"
              schema={schema}
              isDisabled={activeButton === 'once'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PageContent;
