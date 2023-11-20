import Link from '../../../node_modules/next/link';

import { ICONS } from '../../components/icons/icons.const';
import { LogoProps } from './Logo.props';

export const Logo: React.FC<LogoProps> = ({ type, label }) => {
  return (
    <Link href="/">
      {type === 'dark' ? (
        <ICONS.LOGODARK className="h-10" aria-label={label} />
      ) : (
        <ICONS.LOGOLIGHT className="h-10" aria-label={label} />
      )}{' '}
    </Link>
  );
};
