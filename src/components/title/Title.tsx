import React, { FC } from 'react';
import { useThemeContext } from '../../Context/Theme';
//@ts-ignore
import styles from './Title.module.css';
import classnames from 'classnames';
import { Theme } from '../../Constants/@types';

type TitleProps = {
  name: string;
};

const Title: FC<TitleProps> = ({ name }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classnames(styles.container, {
        [styles.whiteColor]: theme === Theme.Dark,
      })}
    >
      {name}
    </div>
  );
};

export default Title;
