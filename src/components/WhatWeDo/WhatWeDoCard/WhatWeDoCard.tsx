import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { WhatWeDoCardProps } from '@/sections/WhatWeDo/WhatWeDo.props';
import Image from 'next/image';
import Link from 'next/link';

export const WhatWeDoCard = ({ data }: { data: WhatWeDoCardProps }) => {
  const whatWeDoCardAfterClass =
    'after:absolute after:block after:h-[1px] after:bg-grey-60 after:w-full after:bottom-[-30px] md:after:bottom-[-50px] ';

  const whatWeDoCardBeforeClass =
    'md:before:absolute md:before:block md:before:w-[1px] md:before:left-[50%] xl:before:left-[396px] 2xl:before:left-[448px] 3xl:before:left-[530px] md:before:bg-grey-60 md:before:h-full md:before:top-0 ';

  return (
    <li
      className={` relative flex w-full flex-col md:flex-row md:gap-x-[30px] xl:gap-x-[240px] 2xl:gap-x-[264px] 3xl:gap-x-[188px] ${whatWeDoCardBeforeClass} ${whatWeDoCardAfterClass}`}
    >
      <div className="relative h-[320px] w-full rounded-2xl saturate-0 transition-all delay-150 hover:saturate-100 sm:h-[440px] md:h-[326px] md:basis-1/2 xl:h-[276px] xl:w-[276px] xl:basis-[276px] 2xl:w-[316px] 2xl:basis-[316px] 3xl:basis-[436px] smOnly:mb-[30px]">
        <Image
          src={data.img}
          alt={data.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="md:basis-1/2 xl:basis-[683px] 2xl:basis-[780px] 3xl:basis-[1216px]">
        <Title tag="h3" variantSize="h3" className="mb-4">
          {data.title}
        </Title>
        <Paragraph variantFontWeight="medium" variantFontSize="16" className="mb-4">
          {data.subTitle}
        </Paragraph>
        <Paragraph variantFontSize="16" variant="dark_grey">
          {data.text}
        </Paragraph>
        {data.href && (
          <Link href={data.href}>
            <Paragraph
              variantFontWeight="medium"
              className="mt-[10px] !text-accent-primary underline underline-offset-4"
            >
              {data.linkTitle}
            </Paragraph>
          </Link>
        )}
      </div>
    </li>
  );
};
