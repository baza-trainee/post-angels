import Link from '../../../node_modules/next/link';

import { ICONS } from '../../components/icons/icons.const';
import { LogoProps } from './Logo.props';

export const Logo: React.FC<LogoProps> = ({ type }) => {
    // const { label, logoType } = data;

  return (
    <Link href="/">
   {type === 'dark' ? (
        <ICONS.LOGODARK className="h-10" aria-label='Логотип компанії'/>
      ) : (
        <ICONS.LOGOLIGHT className="h-10" aria-label='Логотип компанії'/>
      )}    </Link>
  );
};
