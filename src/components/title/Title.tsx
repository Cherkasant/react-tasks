import React, { FC } from 'react';
import { useThemeContext } from '../../Context/Theme';
import styles from './Title.module.css';
import classnames from 'classnames';
import { Theme } from '../../Constants/@types';

type TitleProps = {
  name: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ name, className }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.whiteColor]: theme === Theme.Dark,
      })}
    >
      {name}
    </div>
  );
};

export default Title;
