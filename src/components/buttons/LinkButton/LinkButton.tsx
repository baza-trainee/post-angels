import cn from 'classnames';
import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { LinkButtonProps } from './LinkButton.props';

export const LinkButton: FC<LinkButtonProps & LinkProps> = ({
  variant = 'accent',
  disabled = false,
  size = 'big',
  href,
  children,
  className,
  centered,
  ...props
}) => {
  const disabledProps = disabled ? { role: 'link', 'aria-disabled': disabled } : {};
  return (
    <Link legacyBehavior href={href} {...disabledProps}>
      <a
        className={cn(
          'flex items-center justify-center rounded-full p-[14px] font-eUkraine text-base font-medium',
          className,
          // { ['w-[140px]']: size == 'small', ['w-[214px]']: size == 'big' },
          { ['mx-auto']: centered },
          !disabled && {
            ['bg-accent-primary  text-grey-0 hover:bg-accent-hover focus:bg-accent-pressed']:
              variant == 'accent',
            ['bg-orange  text-grey-0 hover:bg-orange focus:bg-orange']: variant == 'orange',
            ['border border-accent-primary bg-white text-accent-primary hover:border-accent-hover hover:text-accent-hover focus:border-accent-pressed focus:text-accent-pressed']:
              variant == 'white',
          },
          disabled && {
            ['pointer-events-none bg-grey-40   text-grey-0']: variant == 'accent',
            ['pointer-events-none  bg-grey-40 text-grey-0 ']: variant == 'orange',
            ['pointer-events-none border border-grey-40 bg-white text-grey-40	']: variant == 'white',
          }
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
