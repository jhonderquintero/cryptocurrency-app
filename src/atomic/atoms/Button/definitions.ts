export type ButtonVariant = 'normal' | 'outlined' | 'text' | 'custom';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What button variant to use
   */
  variant?: ButtonVariant;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What background color to use in dark mode
   */
  darkBackgroundColor?: string;
  /**
   * What text color to use
   */
  textColor?: string;
  /**
   * What text color to use in dark mode
   */
  darkTextColor?: string;
}
