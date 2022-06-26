import React from 'react';
import { IconsProps, IconVariant } from './definitions';
import { styles } from './styles.style';

const Icons = ({ alt, image, variant = 'base' }: IconsProps) => {
  const classes = getIconClasses(variant);
  return <img alt={alt} src={image} className={classes} />;
};

const getIconClasses = (variant: IconVariant) => {
  const iconClasses = {
    large: () => styles.large,
    base: () => styles.base,
    small: () => styles.small,
  };
  return iconClasses[variant]();
};

export default Icons;
