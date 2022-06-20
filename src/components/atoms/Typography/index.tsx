import React from 'react';
import { TypographyProps, TypographyVariant } from './definitions';
import { styles } from './styles.style';

const index = ({
  variant = 'text',
  isBold = false,
  isAlt = false,
  children,
}: TypographyProps) => {
  const classes = `${getTypographyClasses(variant, isBold, isAlt)}`;
  if (variant.indexOf('heading') !== -1) {
    return <h2 className={classes}>{children}</h2>;
  }
  return <p className={classes}>{children}</p>;
};

const getTypographyClasses = (
  typographyVariant: TypographyVariant,
  isBold: boolean,
  isAlt: boolean
) => {
  const conditionStyle =
    (isAlt ? styles.alternative : '') + (isBold ? styles.bold : '');
  const typographyClasses = {
    'heading-lg': () => styles.headingLg + conditionStyle,
    heading: () => styles.heading + conditionStyle,
    'heading-sm': () => styles.headingSm + conditionStyle,
    'text-lg': () => styles.textLg + conditionStyle,
    text: () => styles.text + conditionStyle,
    'text-sm': () => styles.textSm + conditionStyle,
    info: () => styles.info + conditionStyle,
  };
  return (typographyClasses[typographyVariant] || typographyClasses['text'])();
};

export default index;
