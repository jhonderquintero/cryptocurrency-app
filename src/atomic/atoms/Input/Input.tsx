import React from 'react';
import { InputProps } from './definitions';
import { inputStyle } from './styles.styles';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, placeHolder }, ref) => {
    return (
      <input
        placeholder={placeHolder}
        ref={ref}
        type={variant}
        className={inputStyle}
      />
    );
  }
);

export default Input;
