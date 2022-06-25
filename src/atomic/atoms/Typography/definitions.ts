export interface Props {
  type: string;
  children: string;
  isBold?: boolean;
  isAlt?: boolean;
}

export type TypographyVariant =
  | 'heading-lg'
  | 'heading'
  | 'heading-sm'
  | 'text-lg'
  | 'text'
  | 'text-sm'
  | 'info';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant?: TypographyVariant;
  isAlt?: boolean;
  isBold?: boolean;
  children: string;
}
