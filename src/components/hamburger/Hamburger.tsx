import React, { FC } from 'react';
//@ts-ignore
import styles from './Hamburger.module.css';

type HamburgerProps = {
  onClick: () => void;
  className?: string;
  isOpened?: boolean;
};

const Hamburger: FC<HamburgerProps> = (props) => {
  const { onClick, className, isOpened } = props;

  return <div className={styles.button} onClick={onClick}></div>;
};

export default Hamburger;
