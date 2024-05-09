'use client';

import Image from 'next/image';
import { useState } from 'react';

function CustomImage({
  alt,
  defaultImg,
  src,
  className,
  //   width,
  //   height,

  ...props
}: {
  alt: string;
  defaultImg: string;
  src: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  id?: any;
}) {
  const [srcset, setSrcset] = useState(src);

  return (
    <Image
      {...props}
      src={srcset}
      alt={alt}
      //   fill
      //   height={height}
      //   width={width}
      priority={true}
      quality={100}
      className={`${className}`}
      style={{
        objectFit: 'cover',
      }}
      onError={() => setSrcset(defaultImg)}
      placeholder="blur"
      blurDataURL={defaultImg}
    />
  );
}

export default CustomImage;
