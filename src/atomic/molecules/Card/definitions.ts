export type CardVariants = 'contain' | 'news' | 'chart';

export type CardSize = 'small' | 'base' | 'large';

export interface CardProps {
  children: JSX.Element | JSX.Element[];
  variant?: CardVariants;
  size?: CardSize;
}
