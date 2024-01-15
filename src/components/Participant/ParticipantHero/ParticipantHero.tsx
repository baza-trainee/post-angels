'use client';

import Image from 'next/image';;

import { Title } from '@/components/typography/Title/Title';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import useBreakpoints from '@/utils/useBreakpoints';
import { ParticipantHeroProps } from './ParticipantHero.props';

export const ParticipantHero: React.FC<ParticipantHeroProps> = ({
  title,
  accentTitle,
  description,
  img,
  alt
}) => {
  const { less480px, less768px, less1000px, less1280px } = useBreakpoints();

  const imageWidth = less480px ? 320 : less768px ? 438 : less1000px ? 728 : less1280px ? 960 : 780;
  const imageHeight = less480px ? 205 : less768px ? 281 : less1000px ? 468 : less1280px ? 620 : 414;
  
  return (
    <div className="container flex flex-col gap-[40px] pt-[113px] xl:flex-row xl:justify-between xl:pt-[188px]">
      <div className="flex flex-col gap-[30px] 2xl:gap-4">
        <Title variantSize="h2" className="flex flex-col flex-wrap lg:flex-row">
          <p>{title}&zwnj;</p>
          <span>{accentTitle}</span>
        </Title>
        <Paragraph variantFontSize="16" className="text-grey-80">
          {description}
        </Paragraph>
      </div>
    
      <Image
        className="rounded-2xl"
        src={`/images/participant/${img}.png`}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
};
