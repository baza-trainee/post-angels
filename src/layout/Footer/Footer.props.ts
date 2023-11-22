export interface FooterProps {
  data: {
    footerNav: {
      name: string;
      href: string;
    }[];
    footerDoc: {
      name: string;
      href: string;
    }[];
    footerCop: {
      name: string;
    };
    footerLabel: { name: string };
  };
  lang: 'ua' | 'en';
}
