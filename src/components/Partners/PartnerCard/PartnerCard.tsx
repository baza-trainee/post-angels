import Image from 'next/image';
import { PartnersSliderProps } from '@/sections/PartnersTop/PartnersTop.props';
import Link from 'next/link';

export const PartnerCard = ({ attributes }: PartnersSliderProps) => {
  return (
    <Link
      href={attributes.web_link || ''}
      rel="nofollow noreferrer"
      target="_blank"
      className={` flex h-[68px]   w-fit items-center justify-center saturate-0 transition-all delay-150 hover:saturate-100 `}
    >
      <Image
        className="h-[68px] w-auto  object-contain object-center"
        width={attributes.partnerOrgLogo.src.data.attributes.width}
        height={attributes.partnerOrgLogo.src.data.attributes.height}
        priority
        src={attributes.partnerOrgLogo.src.data.attributes.url}
        alt={`${attributes.partnerOrgLogo.alt} ${attributes.partnerOrgTitle}`}
        sizes="30wv"
        //   placeholder="blur"
        //   blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
      />
    </Link>
  );
};
