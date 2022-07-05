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
      return `btn-normal rounded-sm bg-primary-subdued dark:bg-primary-dark text-primary-dark dark:text-primary py-2 px-4 hover:bg-tertiary`;
    },
    outlined: function () {
      return `btn-outlined bg-transparent text-black dark:text-white py-4 px-12 border-2 border-black dark:border-white text-xs`;
    },
    text: function () {
      return `btn-text rounded-sm bg-transparent text-black dark:text-white py-2 px-4 hover:bg-primary hover:text-white`;
    },
    custom: function () {
      return 'btn-custom py-2 px-4';
    },
  };
  return (buttonClases[buttonVariant] || buttonClases['normal'])();
};
