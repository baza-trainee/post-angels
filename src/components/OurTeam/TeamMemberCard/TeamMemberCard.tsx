import Image from 'next/image';
import { TeamMemberProps } from './TeamMemberCard.props';
import { Paragraph } from '@/components/typography/Paragraph';

export const TeamMemberCard = ({ member }: TeamMemberProps) => {
  const { name, img } = member;
  const TeamMemberAfterClass =
    'after:absolute after:block after:h-[1px] after:bg-grey-60 after:w-full after:left-0 3xl:after:w-full lg:[&:nth-child(5)]:after:w-[202%] lg:[&:nth-child(5)]:after:left-[-250px] xl:[&:nth-child(4)]:after:w-[0px] xl:[&:nth-child(5)]:after:w-[302%] xl:[&:nth-child(5)]:after:left-[-602px] 2xl:[&:nth-child(5)]:after:left-[-456px] 3xl:[&:nth-child(5)]:after:left-[-622px] 3xl:[&:nth-child(5)]:after:w-[303%] md:[&:nth-child(5)]:after:w-[202%] md:[&:nth-child(5)]:after:left-[-182px] 3xl:before:h-[70%]';

  const TeamMemberBeforeClass =
    'md:before:absolute md:before:block even:md:before:w-[1px] xl:[&:nth-child(4)]:before:w-[0px] md:[&:nth-child(4)]:before:left-[-2px] md:[&:nth-child(2)]:before:left-[-2px] first:3xl:before:left-[610px] 3xl:[&:nth-child(3)]:before:left-[-1px]  2xl:[&:nth-child(4)]:before:w-[1px] xl:[&:nth-child(4)]:before:left-[452px] 3xl:[&:nth-child(4)]:before:left-[612px] 3xl:[&:nth-child(5)]:before:left-[610px]  2xl:[&:nth-child(5)]:before:left-[446px] last:2xl:before:-w-[1px] first:xl:before:left-[398px] first:2xl:before:left-[450px] xl:[&:nth-child(5)]:before:left-[-65px] xl:[&:nth-child(2)]:before:w-[0px] last:md:before:border-grey-0 odd:md:before:left-[0px] lg:before:h-[86%]  even:lg:before:w-[1px] odd:xl:before:w-[1px] last:xl:before:left-[396px] 2xl:before:left-[448px] 3xl:before:left-[612px] md:before:bg-grey-60 md:before:h-[82%] md:before:top-4 ';

  return (
    <li
      className={`mb-[30px] h-full w-full border-grey-60 p-4 saturate-0 transition-all delay-150 hover:saturate-100 md:mb-4 md:w-1/2 lg:mb-8 xl:w-1/3 ${TeamMemberBeforeClass} ${TeamMemberAfterClass}`}
    >
      <div>
        <Image
          className="mb-4 h-full w-full rounded-2xl object-cover object-center lg:h-[346px] lg:w-[465px] 3xl:h-[436px] 3xl:w-[592px]"
          src={img}
          alt={name}
          width={320}
          height={273}
          priority
          sizes="100wv"
        />
        <Paragraph variant="dark" className="mb-[30px] text-xl font-medium leading-[30px]">
          {name}
        </Paragraph>
      </div>
    </li>
  );
};

export default TeamMemberCard;
