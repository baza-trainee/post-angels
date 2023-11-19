import { FooterProps } from './Footer.props';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { footerNav, footerDoc } = data;

  return (
    <footer>
      {/* <div className="container"> */}
      <div className="bg-grey-120 flex flex-col gap-[109px] px-[120px] pb-[82px] pt-12 font-eUkraine">
        <div className="flex items-center justify-between gap-[135px] text-base font-normal uppercase text-grey-0">
          <Logo type="light" />
          <ul className="flex gap-[58px]">
            {footerNav.map(ell => (
              <li key={ell.name}>
              <a href={ell.href}>{ell.name}</a>
            </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-start gap-[231px] font-normal text-grey-0">
          <p className="text-xs">Розробка Baza Trainee Ukraine 2023 &copy; Усі права захищені</p>
          <ul className="flex gap-[91px] text-sm underline">
            {footerDoc.map(ell => (
              <li key={ell.name}>
              <a href={ell.href}>{ell.name}</a>
            </li>
            ))}
           
          </ul>
        </div>
      </div>
      <div></div>
      Footer
      {/* </div> */}
    </footer>
  );
};
