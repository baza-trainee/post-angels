import Image from 'next/image';

import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Title } from '@/components/typography/Title/Title';
import { ParticipantHeroProps } from './ParticipantHero.props';

export const ParticipantHero: React.FC<ParticipantHeroProps> = ({
  title,
  accentTitle,
  description,
  img,
  alt,
}) => {
  return (
    <div className="container flex flex-col gap-[40px] xl:flex-row xl:justify-between">
      <div className="flex flex-col gap-[30px] 2xl:gap-4">
        <Title variantSize="h2" className="flex flex-col flex-wrap lg:flex-row">
          {title}
          <br />
          <span>{accentTitle}</span>
        </Title>
        <Paragraph variantFontSize="16" className="text-grey-80">
          {description}
        </Paragraph>
      </div>
      <div className="rounded-2xl saturate-0 transition-all delay-150 hover:saturate-100 xl:min-h-[414px] xl:min-w-[686px] 2xl:min-w-[664px]">
        <Image
          className="h-full w-full rounded-2xl object-cover object-center"
          src={img}
          alt={alt}
          width={686}
          height={620}
        />
      </div>
    </div>
  );
};
