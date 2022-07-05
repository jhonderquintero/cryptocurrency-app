export type InputVariant = 'email' | 'text' | 'password' | 'search';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  placeHolder: string;
}
