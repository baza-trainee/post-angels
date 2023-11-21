export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
    headerButton: { name: string };
    headerLogoLabel: { name: string };
    headerLanguageLabel: { name: string };
  };
}
