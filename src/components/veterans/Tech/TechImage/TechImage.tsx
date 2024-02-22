import Image from 'next/image';

export const TechImage = ({ alt, src }: any) => {
  const { url } = src.data.attributes;

  return (
    <div className="!xl:h-[618px] !xl:w-[584px] relative h-[272px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 sm:h-[355px] md:h-[620px] lg:h-[550px] 2xl:h-[618px] 2xl:w-[780px] 3xl:h-[648px] 3xl:w-[1216px]">
      <Image
        src={url}
        alt={alt}
        fill
        priority
        sizes="(max-width: 600px) 100vw, 50vw"
        className="rounded-2xl object-cover object-center"
      />
    </div>
  );
};
