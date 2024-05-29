import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { Logo } from '@/layout/Logo';
import { getDictionary } from '@/lib/dictionary';
import { ProjectDataProps } from '@/sections/ProjectPage/ProjectPage.props';
import React from 'react';

export const PageMain = async ({
  projectDataInfo,
  lang,
}: {
  projectDataInfo: ProjectDataProps;
  lang: Locale;
}) => {
  const { common } = await getDictionary(lang);
  const { payments, logo } = common;
  
  return (
    <div className="mb-10">
      <div className="mb-5 flex">
        <div className="mt-[40px] xs:hidden sm:hidden md:my-auto md:flex lg:mt-[50px] xl:mt-[50px]">
          <Logo
            variantSize="big"
            type="dark"
            logo={logo}
          />
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
  );
};
