export type IconVariant = 'large' | 'base' | 'small';

export interface IconsProps extends React.HTMLAttributes<HTMLImageElement> {
  variant?: IconVariant;
  image: string;
  alt: string;
}
