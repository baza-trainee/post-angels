'use client';

import Image from '../../../../node_modules/next/image';

import { Title } from '@/components/typography/Title/Title';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import useBreakpoints from '@/utils/useBreakpoints';
import { ParticipantHeroProps } from './ParticipantHero.props';

export const ParticipantHero: React.FC<ParticipantHeroProps> = ({
  accentTitle,
  description,
  imgPath,
  imgAlt,
}) => {
  const { bigger768px, bigger1000px, bigger480px, less480px } = useBreakpoints();

  const imageWidth = less480px
    ? 320
    : bigger480px
      ? 438
      : bigger768px
        ? 728
        : bigger1000px
          ? 960
          : 686;
  const imageHeight = less480px
    ? 205
    : bigger480px
      ? 281
      : bigger768px
        ? 468
        : bigger1000px
          ? 620
          : 414;
  return (
    <div className='flex flex-col gap-[40px] 2xl:flex-row 2xl:justify-between'>
      <div className='flex flex-col gap-[30px] 2xl:gap-4'>
        <div className='flex flex-col lg:flex-row'>
        <Title variantSize="h2" colorVariant="accent">
          Анкета
        </Title>
        <Title variantSize="h2" colorVariant="accent">
          {accentTitle}
        </Title>
        </div>
        <Paragraph variantFontSize="16" className="text-grey-80">
          {description}
        </Paragraph>
      </div>
      <Image
        className='rounded-2xl'
        src={imgPath}
        alt={imgAlt}
        width={imageWidth}
        height={imageHeight} />
    </div>
  );
};
