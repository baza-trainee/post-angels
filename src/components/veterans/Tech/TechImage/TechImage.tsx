import Image from 'next/image';
import { TechImageProps } from './TechImage.props';
import CustomImage from '@/components/CustomImage/CustomImage';

export const TechImage = ({ src, alt, id }: TechImageProps) => {
  return (
    <div className="relative h-[272px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 sm:h-[355px] md:h-[620px] lg:h-[550px] xl:h-[618px] 2xl:h-[618px] 3xl:h-[648px]">
      <CustomImage
        id={id}
        defaultImg="/images/default_img/veteran_tech.png"
        src={src.data.attributes.url}
        alt={alt || 'background image'}
        fill
        priority
        sizes="(max-width: 600px) 100vw, 50vw"
        className="rounded-2xl object-cover object-center"
      />
    </div>
  );
};
