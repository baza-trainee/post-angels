'use client';

import Image from '../../../../node_modules/next/image';

import { Title } from '@/components/typography/Title/Title';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';
import { Locale } from '@/i18n.config';

export const ParticipantHero = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      <div>
      <Title variantSize="h2" colorVariant="accent">
        Анкета
      </Title>
      <Title variantSize="h2" colorVariant="accent">
        {titleText}
        </Title>
        <Paragraph
          // variant='dark' variantFontSize="16"
        >{description}</Paragraph>
      </div>
      <Image/>
    </div>
  );
};
