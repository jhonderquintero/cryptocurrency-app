import React from 'react';
import { ButtonProps, ButtonVariant } from './definitions';

export const Button = ({ variant = 'normal', ...rest }: ButtonProps) => {
  const classes = `${getButtonClasses(variant)}`;
  return <button {...rest} className={classes} />;
};

const getButtonClasses = (buttonVariant: ButtonVariant) => {
  const buttonClases = {
    normal: function () {
      return `bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary py-2 px-4`;
    },
    outlined: function () {
      return `bg-transparent text-black dark:text-white py-2 px-4 border-2 border-black dark:border-white`;
    },
    text: function () {
      return `bg-transparent text-black dark:text-white py-2 px-4 hover:bg-primary hover:text-white`;
    },
    custom: function () {
      return '';
    },
  };
  return (buttonClases[buttonVariant] || buttonClases['normal'])();
};
