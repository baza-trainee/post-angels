import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { footerNav } = data;

  return (
    <footer>
      <div className="container">
        <Logo type='dark'/>
        Footer
        <div>{footerNav[0].name}</div>
      </div>
    </footer>
  );
};
