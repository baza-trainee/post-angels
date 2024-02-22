import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

import { ProjectCardProps } from './ProjectsCard.props';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { LinkButton } from '@/components/buttons/LinkButton';

export const ProjectCard = (props: ProjectCardProps) => {
  const { all, image, startDate, title, collected, slug, status } = props.attributes;
  const { lang } = props;
  const cardData = props.cardData;

  const blockRef = useRef<HTMLDivElement | null>(null);
  const [blockWidth, setBlockWidth] = useState(0);

  const updateBlockWidth = () => {
    if (blockRef.current) {
      const width = blockRef.current.offsetWidth;
      setBlockWidth(width);
    }
  };

  useEffect(() => {
    updateBlockWidth();
    window.addEventListener('resize', updateBlockWidth);
    return () => {
      window.removeEventListener('resize', updateBlockWidth);
    };
  }, [blockWidth]);

  const getPercent = (collected: number, all: number) => {
    return Math.round((collected / all) * 100);
  };

  const getPercentWidth = (blockWidth: number, collected: number, all: number) => {
    return Math.round(blockWidth * (collected / all));
  };

  const afterclassname = `smOnly:after:hidden after:bg-grey-60 after:content-[''] after:w-[1px] after:block after:absolute after:h-full after:right-[-15px] after:top-0`;

  return (
    <article className={`${afterclassname} group`}>
      <div
        className={`mb-[10px] h-[243px]  rounded-2xl saturate-0 transition-all delay-150 group-hover:saturate-100 sm:h-[282px]  xl:h-[279px] xl:w-full `}
      >
        <Image
          src={image.src.data.attributes.url}
          alt={image.alt}
          width={image.src.data.attributes.width}
          height={image.src.data.attributes.height}
          className='object-center" h-full w-full rounded-2xl object-cover'
        />
      </div>

      <div className="mb-[30px] flex flex-col gap-y-4">
        <Title tag="h4" variantSize="h4">
          {title}
        </Title>
        <div className="flex justify-between	">
          <Paragraph
            variant={status === 'completed' ? 'light' : 'grey'}
            variantFontSize="15"
            variantFontWeight="regular"
          >
            {cardData?.projectCard.collected}
          </Paragraph>
          <Paragraph variantFontWeight="medium" variantFontSize="15">
            {new Intl.NumberFormat('ua-UA').format(collected)} /&nbsp;
            {new Intl.NumberFormat('ua-UA').format(all)}
          </Paragraph>
        </div>
        <div className="flex items-center	justify-between gap-x-2">
          <div
            ref={blockRef}
            className="h-[10px] w-full overflow-hidden rounded-full bg-progressBar"
          >
            <div
              style={{ width: getPercentWidth(blockWidth, collected, all) + 'px' }}
              className={`${status === 'completed' ? 'hidden' : 'bg-green'} h-full rounded-full`}
            ></div>
          </div>
          <Paragraph
            variant={status === 'completed' ? 'light' : 'grey'}
            variantFontSize="15"
            variantFontWeight="regular"
          >
            {getPercent(collected, all)}%
          </Paragraph>
        </div>
        <div className="flex justify-between	">
          <Paragraph
            variant={status === 'completed' ? 'light' : 'grey'}
            variantFontSize="15"
            variantFontWeight="regular"
          >
            {cardData?.projectCard.starts}
          </Paragraph>
          <Paragraph
            variant={status === 'completed' ? 'light' : 'grey'}
            variantFontSize="15"
            variantFontWeight="regular"
          >
            {startDate}
          </Paragraph>
        </div>
      </div>

      <ul className="flex flex-col gap-y-5">
        <li>
          <LinkButton href={`payments/${slug}`} disabled={status === 'completed'}>
            {status === 'completed'
              ? cardData?.projectCard.buttons.finishedBtn.text
              : cardData?.projectCard.buttons.fundBtn.text}
          </LinkButton>
        </li>
        <li>
          <LinkButton variant="white" href={`${lang}/projects/${slug}/info`}>
            {cardData?.projectCard.buttons.moreBtn.text}
          </LinkButton>
        </li>
      </ul>
    </article>
  );
};
