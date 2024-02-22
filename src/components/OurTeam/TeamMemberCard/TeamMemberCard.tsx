'use client';
import Image from 'next/image';
import { Paragraph } from '@/components/typography/Paragraph';
import { TeamMember } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const TeamMemberCard = ({ name, lastName, image, id }: TeamMember) => {
  return (
    <li
      className={`team_card  relative border-b border-grey-60 py-10 md:w-[calc((100%_-_30px)_/_2)] xl:w-[calc((100%_-_32px)_/_3)] mdOnly:even:pl-[30px] xl:[&:nth-child(3n)]:pl-[32px] xl:[&:nth-child(3n-1)]:pl-[32px]`}
    >
      <div className={`team_image relative`}>
        {id !== 'default' ? (
          <Image
            className={`relative h-[326px] w-full rounded-2xl object-cover object-center saturate-0 transition-all delay-150 hover:saturate-100 lg:h-[346px]  xl:h-[326px]  3xl:h-[436px]`}
            src={image.url}
            alt={image.alt}
            width={320}
            height={273}
            priority
            sizes="100wv"
          />
        ) : (
          <div className="bg-box relative w-full  rounded-2xl md:h-[326px]  lg:h-[346px]  xl:h-[326px] 3xl:h-[436px]  "></div>
        )}

        <div>
          <Paragraph
            variant="dark"
            className="mt-4 break-words  font-eUkraineHead"
            variantFontSize="20"
            variantFontWeight="medium"
          >
            {name} {lastName}
          </Paragraph>
        </div>
      </div>
    </li>
  );
};
