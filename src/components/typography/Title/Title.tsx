import { FC } from 'react';
import cn from 'classnames';

import { TitleProps } from './Title.props';

export const Title: FC<TitleProps> = ({ tag = 'h2', colorVariant, children, className }) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        {
          ['text-[40px] uppercase leading-[110%] text-accent-primary']: tag == 'h1',
          ['text-[32px] uppercase leading-[110%] text-grey-100 [&>span]:text-accent-primary']:
            tag == 'h2',
          ['text-[28px] leading-[150%] text-grey-100']: tag == 'h3',
          [`text-2xl leading-[150%] ${
            colorVariant === 'orange'
              ? 'text-orange'
              : colorVariant === 'accent'
                ? 'text-accent-primary'
                : 'text-grey-100'
          }`]: tag == 'h4',
          ['text-xl leading-[150%] text-grey-100']: tag == 'h5',
        },
        'font-eUkraineHead font-medium',
        className
      )}
    >
      {children}
    </Tag>
  );
};
