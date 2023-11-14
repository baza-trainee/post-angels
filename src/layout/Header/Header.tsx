import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const { nav } = data;
  return (
    <header>
      <div className="container">
        Header
        <div>{nav[0].name}</div>
      </div>
    </header>
  );
};
