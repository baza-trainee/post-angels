export interface RadiobuttonProps {
  name: string;
  title: string;
  className?: string;
  variantFontWeight?: 'normal' | 'medium';
  options: {
    name: string;
    value: string;
    id: number;
  }[];
}
