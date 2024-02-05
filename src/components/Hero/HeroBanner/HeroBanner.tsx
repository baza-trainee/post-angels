import Image from 'next/image';
// import { getBase64, shimmer } from '@/utils';
import { BannerProps } from './HeroBanner.props';

export const HeroBanner: React.FC<BannerProps> = ({ src, alt, ind = 1 }) => (
  <div
    className={` h-[205px] w-full  rounded-2xl saturate-0 transition-all delay-150 hover:saturate-100 sm:h-[282px] xl:absolute xl:h-full xl:w-full ${
      ind % 2 === 0
        ? '-bottom-10 left-10 z-10 2xl:left-20 3xl:-bottom-14 3xl:left-[32px]'
        : 'bottom-0 left-0'
    } `}
  >
    <Image
      className="h-full w-full rounded-2xl object-cover object-center"
      width={320}
      height={205}
      priority
      src={src.data.attributes.url}
      alt={alt}
      sizes="100wv"
      //   placeholder="blur"
      //   blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
    />
  </div>
);
