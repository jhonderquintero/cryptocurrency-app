import React from 'react';
import { types, styles } from './Typography.style';
import { Props } from './types';

const index = ({ type, children, isBold = false, isAlt = false }: Props) => {
  let styleClass: string;
  switch (type) {
    case types.headingLg:
      styleClass = styles.headingLg;
      break;
    case types.heading:
      styleClass = styles.heading;
      break;
    case types.headingSm:
      styleClass = styles.headingSm;
      break;
    case types.textLg:
      styleClass = styles.textLg;
      break;
    case types.text:
      styleClass = styles.text;
      break;
    case types.textSm:
      styleClass = styles.textSm;
      break;
    case types.info:
      styleClass = styles.info;
      break;
    default:
      styleClass = styles.defaultText;
      break;
  }
  return (
    <p
      className={`${styleClass} ${isBold && styles.bold} ${
        isAlt && styles.alternative
      }`}
    >
      {children}
    </p>
  );
};
export const textType = types;

export default index;
