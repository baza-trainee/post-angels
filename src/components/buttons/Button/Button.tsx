import cn from 'classnames';

// import Arrow from 'public/images/right-arrow.svg';
import { FC } from 'react';
import { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({
  variant = 'accent',
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-full p-[14px] font-eUkraine text-base font-medium duration-300',
        className,
        // { ['w-[140px]']: size == 'small', ['w-[214px]']: size == 'big' },

        !disabled && {
          ['bg-accent-primary  text-grey-0 hover:bg-accent-hover focus:bg-accent-pressed']:
            variant == 'accent',
          ['bg-orange  text-grey-0 hover:bg-orange focus:bg-orange']: variant == 'orange',
          ['border border-accent-primary bg-transparent text-accent-primary hover:border-accent-hover hover:text-accent-hover focus:border-accent-pressed focus:text-accent-pressed']:
            variant == 'white',
        },
        disabled && {
          ['pointer-events-none bg-grey-40   text-grey-0']: variant == 'accent',
          ['pointer-events-none  bg-grey-40 text-grey-0 ']: variant == 'orange',
          ['pointer-events-none border border-grey-40 bg-transparent text-grey-40	']:
            variant == 'white',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
