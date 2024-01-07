import cn from 'classnames';
import { FC } from 'react';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  variantFontWeight = 'regular',
  variantFontSize = 'sm_16',
  children,
  className,
  centered = false,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-eUkraine  leading-[160%] ',

        {
          ['text-grey-100']: variant == 'dark',
          ['text-grey-70']: variant == 'light_grey',
          ['text-white']: variant == 'white',
          ['text-center']: centered,
          ['font-normal']: variantFontWeight == 'regular',
          ['font-medium']: variantFontWeight == 'medium',
          ['text-base']: variantFontSize == '16',
          ['text-[15px]']: variantFontSize == '15',
          ['text-sm']: variantFontSize == '14',
          ['text-xs']: variantFontSize == '12',
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
