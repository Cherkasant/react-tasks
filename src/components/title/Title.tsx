import React, { FC } from 'react';
//@ts-ignore
import styles from './Title.module.css';

type TitleProps = {
  name: string;
};

const Title: FC<TitleProps> = ({ name }) => {
  return <div className={styles.container}>{name}</div>;
};

export default Title;
