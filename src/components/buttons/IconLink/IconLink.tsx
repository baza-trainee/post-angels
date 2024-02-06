import cn from 'classnames';
import { FC } from 'react';

import { IconLinkProps } from './IconLink.props';
import Link from 'next/link';

export const IconLink: FC<IconLinkProps> = ({
  label,
  className,
  children,
  blank = false,
  href,
}) => {
  return (
    <Link
      aria-label={label}
      href={href}
      className={cn(
        'block',

        className
      )}
      rel={blank ? 'nofollow noreferrer' : undefined}
      target={blank ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
};
