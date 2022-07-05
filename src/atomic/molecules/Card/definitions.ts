export type CardVariants =
  | 'contain'
  | 'news-box'
  | 'news-v'
  | 'news-h'
  | 'info';

export type CardSize = 'small' | 'base' | 'large' | 'auto';

export interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
  variant?: CardVariants;
  size?: CardSize;
}
