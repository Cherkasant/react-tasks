import React from 'react';
import { useThemeContext } from '../../Context/Theme';
import classNames from 'classnames';

import styles from './Footer.module.css';
import { Theme } from '../../Constants/@types';

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.footerContainer, {
          [styles.dark]: theme === Theme.Dark,
        })}
      >
        <div>©2022 Blogfolio</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
