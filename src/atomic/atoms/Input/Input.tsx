import React from 'react';
import { InputProps } from './definitions';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant }, ref) => {
    return (
      <input
        ref={ref}
        type={variant}
        className="bg-primary-subdued-dark dark:bg-primary-dark"
      />
    );
  }
);

export default Input;
