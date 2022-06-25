import React from 'react';
import { TypographyProps, TypographyVariant } from './definitions';
import { styles } from './styles.style';

const Typography = ({
  variant = 'text',
  isBold = false,
  isAlt = false,
  children,
}: TypographyProps) => {
  const classes = `${getTypographyClasses(variant, isBold, isAlt)}`;
  const Component = getTypographyComponent(variant);
  return <Component className={classes}>{children}</Component>;
};

const getTypographyComponent = (typographyVariant: TypographyVariant) => {
  const typographyComponent = {
    'heading-lg': 'h1',
    heading: 'h2',
    'heading-sm': 'h3',
    'text-lg': 'p',
    text: 'p',
    'text-sm': 'p',
    info: 'span',
  };
  return typographyComponent[typographyVariant];
};

const getTypographyClasses = (
  typographyVariant: TypographyVariant,
  isBold: boolean,
  isAlt: boolean
) => {
  const conditionStyle =
    (isAlt ? styles.alt : '') + (isBold ? styles.bold : '');
  const typographyClasses = {
    'heading-lg': () => styles.headingLg + conditionStyle,
    heading: () => styles.heading + conditionStyle,
    'heading-sm': () => styles.headingSm + conditionStyle,
    'text-lg': () => styles.textLg + conditionStyle,
    text: () => styles.text + conditionStyle,
    'text-sm': () => styles.textSm + conditionStyle,
    info: () => styles.info + conditionStyle,
  };
  return typographyClasses[typographyVariant]();
};

export default Typography;
