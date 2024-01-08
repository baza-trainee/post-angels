export interface LogoProps {
  type: 'dark' | 'light';
  logo: {
    label: string;
    href: string;
  };
  variantSize?: 'big' | 'small';
}
