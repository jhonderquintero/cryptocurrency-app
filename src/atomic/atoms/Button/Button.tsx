import React from 'react';
import { ButtonProps, ButtonVariant } from './definitions';

export const Button = ({
  variant = 'normal',
  className,
  ...rest
}: ButtonProps) => {
  const customClassNames = variant === 'custom' ? className : '';
  const classes = `${getButtonClasses(variant)}`;
  return (
    <button
      {...rest}
      data-testid="button-base"
      className={classes + customClassNames}
    />
  );
};

const getButtonClasses = (buttonVariant: ButtonVariant) => {
  const buttonClases = {
    normal: function () {
      return `btn-normal bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary py-2 px-4 hover:bg-primary/90`;
    },
    outlined: function () {
      return `btn-outlined bg-transparent text-black dark:text-white py-2 px-4 border-2 border-black dark:border-white`;
    },
    text: function () {
      return `btn-text bg-transparent text-black dark:text-white py-2 px-4 hover:bg-primary hover:text-white`;
    },
    custom: function () {
      return 'btn-custom py-2 px-4';
    },
  };
  return (buttonClases[buttonVariant] || buttonClases['normal'])();
};
