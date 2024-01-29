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
          ['text-orange']: variant == 'orange',
          ['text-grey-100']: variant == 'dark',
          ['text-grey-50']: variant == 'light',
          ['text-grey-80']: variant == 'dark_grey',
          ['text-grey-70']: variant == 'grey',
          ['text-white']: variant == 'white',
          ['text-accent-primary']: variant == 'accent',
          ['text-center']: centered,
          ['font-normal']: variantFontWeight == 'regular',
          ['font-medium']: variantFontWeight == 'medium',
          ['text-[22px]']: variantFontSize == '22',
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
