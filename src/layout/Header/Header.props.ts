export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
    headerButton: { name: string };
    headerLanguageLabel: { name: string };
  };
  lang: 'ua' | 'en';
}
