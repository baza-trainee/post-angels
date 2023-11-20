import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { footerNav, footerDoc, footerCop, footerLabel } = data;

  return (
    <footer>
      <div className="flex flex-col gap-[109px] bg-grey-120 px-[120px] pb-[82px] pt-12 font-eUkraine">
        <div className="flex items-center justify-between text-base font-normal uppercase text-grey-0">
          <Logo type="light" label={footerLabel.name} />

          <ul className="flex gap-[58px]">
            {footerNav.map(ell => (
              <li key={ell.name}>
                <a href={ell.href}>{ell.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-start gap-[231px] font-normal text-grey-0">
          <p className="text-xs leading-[19.2px]">{footerCop.name}</p>
          <ul className="flex gap-[91px] text-sm underline">
            {footerDoc.map(ell => (
              <li key={ell.name}>
                <a href={ell.href}>{ell.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
