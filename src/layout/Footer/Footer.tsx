import { FooterProps } from './Footer.props';

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { footerNav } = data;

  return (
    <footer>
      <div className="container">
        Footer
        <div>{footerNav[0].name}</div>
      </div>
    </footer>
  );
};
