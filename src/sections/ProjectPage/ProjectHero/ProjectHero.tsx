import Image from 'next/image';

import { ProjectData } from '@/components/project/ProjectData/ProjectData';
import { LinkButton } from '@/components/buttons/LinkButton';

import { ProjectHeroProps, StaticDataHeroProps } from '../ProjectPage.props';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { SocialIcon } from '../SocialIcon';
import { Locale } from '@/i18n.config';

export const ProjectHero = ({
  data,
  staticData,
  lang,
}: {
  data: ProjectHeroProps;
  staticData: StaticDataHeroProps;
  lang: Locale;
}) => {
  const { id, title, organizer, image, socials, status } = data;

  const createTitle = (title: string) => {
    const words = title.split(' ');

    return (
      <Title tag="h1" variantSize="h2" className="mb-[30px] !text-[28px] xl:!hidden">
        {words.slice(0, 2).join(' ')} <span>{words.slice(2).join(' ')}</span>
      </Title>
    );
  };

  const beforeClass =
    'notXl:before:hidden before:bg-grey-60 before:w-[1px] before:block before:absolute before:h-full before:right-[50%] before:top-0';
  return (
    <section className="pb-[50px] pt-[125px] xl:pb-[80px] xl:pt-[176px] 2xl:pb-[42px]" id="visible">
      <div
        className={`container relative flex flex-col gap-y-4 xl:flex-row xl:gap-x-8 ${beforeClass}`}
      >
        <div>
          {createTitle(title)}

          <div className="relative h-[243px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 md:h-[418px] lg:h-[818px] xl:h-[429px] xl:w-[583px] 2xl:h-[489px] 2xl:w-[664px] 3xl:h-[469px] 3xl:w-[904px]">
            <Image
              src={image.src.data.attributes.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full xl:border-b xl:border-grey-60">
          <Title tag="h1" variantSize="h4" className=" mb-4 xl:mb-[10px] notXl:hidden">
            {title}
          </Title>
          <Paragraph className="mb-4 xl:mb-[10px]">{staticData.subtitle}</Paragraph>
          <ProjectData staticData={staticData} data={data} lang={lang} />
          {organizer && (
            <div>
              <Paragraph
                className="mb-[10px]"
                variant="grey"
                variantFontSize="15"
                variantFontWeight="regular"
              >
                {staticData.organizer.title}
              </Paragraph>
              <div className="mb-[30px] flex items-center gap-x-[10px] xl:mb-[20px]">
                <Image
                  src={data.organizer.image.src.data.attributes.url}
                  alt={data.organizer.image.alt}
                  width={data.organizer.image.src.data.attributes.width}
                  height={data.organizer.image.src.data.attributes.height}
                  className="h-10 w-10 rounded-full saturate-0 transition-all delay-300 hover:saturate-100"
                />
                <Paragraph variant="accent" variantFontSize="14" className="">
                  {data.organizer.name}
                </Paragraph>
              </div>
            </div>
          )}

          <LinkButton
            href={`/payments/${id}`}
            disabled={status === 'completed'}
            className="xl:w-[280px]"
          >
            {status === 'completed'
              ? staticData?.buttons.finishedBtn.text
              : staticData?.buttons.fundBtn.text}
          </LinkButton>
          {socials && (
            <ul className="mt-[30px] flex gap-x-[30px]">
              {socials.map((social, ind) => {
                const icon = staticData.socials.icon.filter(el => social.name === el.name)[0];
                return <SocialIcon icon={icon} social={social} key={ind} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
