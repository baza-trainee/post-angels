import Image from 'next/image';
import { PartnersSliderProps } from '@/sections/PartnersTop/PartnersTop.props';

export const PartnerCard = ({ name, src }: PartnersSliderProps) => {
  return (
    <div
      className={` flex h-[68px]   w-fit items-center justify-center saturate-0 transition-all delay-150 hover:saturate-100 `}
    >
      <Image
        className="h-[68px] w-auto  object-cover object-center"
        width={180}
        height={68}
        priority
        src={src}
        alt={name}
        sizes="30wv"
        //   placeholder="blur"
        //   blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
      />
    </div>
  );
};