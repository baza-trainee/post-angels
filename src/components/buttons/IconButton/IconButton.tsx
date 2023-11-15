import cn from 'classnames';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

export const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  style,
  children,
  disabled = false,
  accent,
  variant,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={cn(
        ' fill-grey-100 ',
        disabled && 'pointer-events-none fill-grey-40',

        className
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
