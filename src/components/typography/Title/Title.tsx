import { FC } from 'react';
import cn from 'classnames';

import { TitleProps } from './Title.props';

export const Title: FC<TitleProps> = ({
  tag = 'h2',
  variantSize,
  colorVariant,
  children,
  className,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        {
          ['text-3xl uppercase leading-[150%] text-accent-primary xl:text-[40px]']:
            variantSize == 'h1',
          ['text-3xl uppercase leading-[150%] text-grey-100 xl:text-[32px] xl:leading-[110%] [&>span]:text-accent-primary']:
            variantSize == 'h2',
          ['text-2xl leading-[150%] text-orange xl:text-[28px]']: variantSize == 'h3',
          [`text-2xl leading-[150%] xl:text-2xl ${
            colorVariant === 'orange'
              ? 'text-orange'
              : colorVariant === 'accent'
                ? 'text-accent-primary'
                : 'text-grey-100'
          }`]: variantSize == 'h4',
          ['text-base leading-[150%] text-grey-100']: variantSize == 'h5',
        },
        'font-eUkraineHead font-medium',
        className
      )}
    >
      {children}
    </Tag>
  );
};
