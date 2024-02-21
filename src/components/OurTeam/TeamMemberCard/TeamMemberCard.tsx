'use client';
import Image from 'next/image';
import { Paragraph } from '@/components/typography/Paragraph';
import { TeammateAttributes } from '@/components/OurTeam/TeamMemberCard/TeamMemberCard.props';

export const TeamMemberCard = ({ name, lastName, image }: TeammateAttributes) => {
  const TeamMemberAfterClass =
    'after:absolute after:block after:h-[1px] after:bg-grey-60 after:w-full after:left-0 3xl:after:w-full lg:[&:nth-child(5)]:after:w-[202%] lg:[&:nth-child(5)]:after:left-[-250px] xl:[&:nth-child(4)]:after:w-[0px] xl:[&:nth-child(5)]:after:w-[299%] xl:[&:nth-child(5)]:after:left-[-693px] 2xl:[&:nth-child(5)]:after:left-[-456px] 3xl:[&:nth-child(5)]:after:left-[-622px] 3xl:[&:nth-child(5)]:after:w-[303%] md:[&:nth-child(5)]:after:w-[202%] md:[&:nth-child(5)]:after:left-[-182px] 3xl:before:h-[70%]';
  const TeamMemberBeforeClass = 'md:before:absolute md:before:block md:before:bg-grey-60 ';

  return (
    <li
      className={`team-member mb-[30px] h-full w-full border-grey-60 p-4 saturate-0 transition-all delay-150 hover:saturate-100 md:mb-4 md:w-1/2 lg:mb-8 xl:w-1/3 ${TeamMemberAfterClass} ${TeamMemberBeforeClass}`}
    >
      <div>
        <Image
          className="mb-4 h-full w-full rounded-2xl object-cover object-center lg:h-[346px] lg:w-[465px] 3xl:h-[436px] 3xl:w-[592px]"
          src={image.src.data.attributes.url}
          alt={image.alt}
          width={320}
          height={273}
          priority
          sizes="100wv"
        />
        <div>
          <Paragraph
            variant="dark"
            className="mb-[30px] break-words text-xl font-medium leading-[30px]"
          >
            {name} {lastName}
          </Paragraph>
        </div>
      </div>
    </li>
  );
};
