import Image from 'next/image';

export const TechImage = ({ alt, src }: any) => {
  const { url } = src.data.attributes;

  return (
    <div className="relative h-[272px] w-full rounded-2xl saturate-0 transition-all delay-300 hover:saturate-100 sm:h-[282px] md:h-[468px] lg:h-[620px] xl:h-[580px] xl:w-[584px] 2xl:h-[580px] 2xl:w-[664px] 3xl:w-[904px]">
      <Image
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-2xl object-cover object-center"
      />
    </div>
  );
};
