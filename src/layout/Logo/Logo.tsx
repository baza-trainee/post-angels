import Link from 'next/link';

import { ICONS } from '@/components/icons/icons.const';
import { LogoProps } from './Logo.props';

export const Logo: React.FC<LogoProps> = ({ type, logo, variantSize = 'big' }) => {
  if (variantSize === 'small') {
    return (
      <Link href={logo.href}>
        <ICONS.LOGO_SMALL className="h-10" aria-label={logo.label} />
      </Link>
    );
  }

  return (
    <Link href={logo.href}>
      {type === 'dark' ? (
        <ICONS.LOGODARK className="h-10" aria-label={logo.label} />
      ) : (
        <ICONS.LOGOLIGHT className="h-10" aria-label={logo.label} />
      )}
    </Link>
  );
};
