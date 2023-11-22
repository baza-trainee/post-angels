import Link from 'next/link';

import { ICONS } from '@/components/icons/icons.const';
import { LogoProps } from './Logo.props';
import { getDictionary } from '@/lib/dictionary';

export const Logo: React.FC<LogoProps> = async ({ type, lang }) => {
  const { common } = await getDictionary(lang);
  const { logo } = common;
  return (
    <Link href={logo.href}>
      {type === 'dark' ? (
        <ICONS.LOGODARK className="h-10" aria-label={logo.label} />
      ) : (
        <ICONS.LOGOLIGHT className="h-10" aria-label={logo.label} />
      )}{' '}
    </Link>
  );
};
