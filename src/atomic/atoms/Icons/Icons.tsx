import Image from 'next/image';
import React from 'react';
import { IconsProps } from './definitions';
import { styles } from './styles.style';

const Icons = ({ alt, image }: IconsProps) => {
  return <Image alt={alt} src={image} className={styles} />;
};

export default Icons;
