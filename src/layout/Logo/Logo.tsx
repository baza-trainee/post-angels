import Link from '../../../node_modules/next/link';

import { ICONS } from '../../components/icons/icons.const';
import { LogoProps } from './Logo.props';

export const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <Link href="/">
   {type === 'dark' ? (
        <ICONS.LOGODARK className="h-10" />
      ) : (
        <ICONS.LOGOLIGHT className="h-10" />
      )}    </Link>
  );
};
