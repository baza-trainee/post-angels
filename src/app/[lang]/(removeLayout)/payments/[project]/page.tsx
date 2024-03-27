import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { Locale } from '@/i18n.config';
import { Logo } from '@/layout/Logo';
import { Button } from '../../../../../components/buttons/Button/Button';
import { ProjectDataProps } from '../../../../../sections/ProjectPage/ProjectPage.props';
import { ICONS } from '@/components/icons';
import OneTimeAssistanceForm from '@/components/Payment/OneTimeAssistanceForm';
import MonthlyAssistanceForm from '@/components/Payment/MonthlyAssistanceForm';

export const page = () => {
  return (
    <div className="container ">
      <div className="mb-10">
        <div className="mb-5">
          <Title variantSize="h2">Збір на травматологічні матеріали</Title>
        </div>
        <div>
          <Paragraph variant="orange">Залишилось зібрати 23 549.00 грн.</Paragraph>
        </div>
      </div>
      <div className="relative border-y border-grey-60   py-[30px] xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
        <div className=" flex flex-col gap-y-4 xl:flex-row xl:justify-center">
          <button className="active:xl:border-b-accent-hover'  w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-hover hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-primary">
            Одноразова допомога
          </button>
          <button className=" w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-hover hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-primary active:xl:border-b-accent-hover">
            Щомісячна допомога
          </button>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-x-8">
          <OneTimeAssistanceForm className="sm:none md:none lg:none hidden  xl:flex xl:w-1/2 " />
          <MonthlyAssistanceForm className=" flex xl:w-1/2 " />
        </div>
      </div>
    </div>
  );
};

export default page;
