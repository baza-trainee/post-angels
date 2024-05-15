import Link from 'next/link';

import { ICONS } from '@/components/icons/icons.const';
import { LogoProps } from './Logo.props';

export const Logo: React.FC<LogoProps> = ({ type, logo, variantSize = 'big' }) => {
  if (variantSize === 'small') {
    return (
      <Link href={logo.href} aria-label={logo.label}>
        <ICONS.LOGO_SMALL className="h-10" />
      </Link>
    );
  }

  return (
    <Link href={logo.href} aria-label={logo.label}>
      {type === 'dark' ? <ICONS.LOGODARK className="h-10" /> : <ICONS.LOGOLIGHT className="h-10" />}
    </Link>
  );
};
