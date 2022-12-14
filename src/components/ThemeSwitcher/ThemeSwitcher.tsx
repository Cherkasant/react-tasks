import React from 'react';

import { SunIcon, MoonIcon } from '../../Assets/icons';
import { useThemeContext } from '../../Context/Theme';
import styles from './ThemeSwitcher.module.css';
import classNames from 'classnames';
import { Theme } from '../../Constants/@types';

const ThemeSwitcher = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={() => onChangeTheme(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={() => onChangeTheme(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
