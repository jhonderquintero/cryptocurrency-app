export type ButtonVariant = 'normal' | 'outlined' | 'text' | 'custom';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What button variant to use
   */
  variant?: ButtonVariant;
  /**
   * What color to use
   */
  color?: string;
}
