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
    <div className="container xl:border-b xl:border-grey-60">
      <div className="mb-10 border-b border-grey-60">
        <div className="mb-5">
          <Title variantSize="h2">Збір на травматологічні матеріали</Title>
        </div>
        <div>
          <Paragraph variant="orange" className="pb-10">
            Залишилось зібрати 23 549.00 грн.
          </Paragraph>
        </div>
      </div>

      <div className="mb-[30px] xl:flex xl:flex-row xl:justify-center">
        <button className="m-2 w-full rounded-2xl border py-3 border-grey-60 xl:border-none hover:text-accent-primary hover:border-accent-hover xl:rounded-none xl:text-accent-primary active:xl:border-b-accent-hover'">Одноразова допомога</button>
        <button className='m-2 w-full rounded-2xl border py-3 border-grey-60 xl:border-none hover:text-accent-primary hover:border-accent-hover xl:rounded-none xl:text-accent-primary active:xl:border-b-accent-hover'>Щомісячна допомога</button>
      </div>

      <div className="mb-[30px]">
      </div>

      <div className='flex flex-col xl:flex-row xl:space-x-4'>
        <OneTimeAssistanceForm className="hidden sm:none md:none lg:none xl:flex  "/>
        <MonthlyAssistanceForm className="flex " />
      </div>
      </div>
  );
};

export default page;