import React from 'react';
import { CardProps, CardSize, CardVariants } from './definitions';
import { cardStyle, cardTypes, cardContainSizes } from './styles.style';

const Card = ({ children, size = 'auto', variant = 'contain' }: CardProps) => {
  const cardSize = getCardSize(size);
  const style = getCardVariant(cardSize, variant);
  const classes = cardStyle + style;
  return <div className={classes}>{children}</div>;
};

const getCardSize = (size: CardSize) => {
  const cardSize = {
    large: () => cardContainSizes.large,
    base: () => cardContainSizes.base,
    small: () => cardContainSizes.small,
    auto: () => cardContainSizes.auto,
  };
  return cardSize[size]();
};

const getCardVariant = (size: string, variant: CardVariants): string => {
  const cardVariant = {
    contain: () => cardTypes.contain + size,
    'news-box': () => cardTypes['news-box'] + size,
    'news-v': () => cardTypes['news-v'] + size,
    'news-h': () => cardTypes['news-h'] + size,
    info: () => cardTypes.info + size,
  };
  return cardVariant[variant]();
};

export default Card;
