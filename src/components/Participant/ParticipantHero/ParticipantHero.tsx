'use client';

import Image from 'next/image';

import { Title } from '@/components/typography/Title/Title';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { ParticipantHeroProps } from './ParticipantHero.props';

export const ParticipantHero: React.FC<ParticipantHeroProps> = ({
  title,
  accentTitle,
  description,
  img,
  alt,
}) => {
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

      <Image className="rounded-2xl" src={img} alt={alt} width={960} height={620} />
    </div>
  );
};
