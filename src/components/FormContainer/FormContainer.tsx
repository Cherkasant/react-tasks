import React, { ReactElement, FC } from 'react';

import styles from './FormContainer.module.css';
import classnames from 'classnames';
import Title from '../title';
import { useThemeContext } from '../../Context/Theme';
import { Theme } from '../../Constants/@types';

type FormContainerProps = {
  title: string;
  children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classnames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div>
        <div className={styles.goBackButton}>{'Back to home'}</div>
        <Title name={title} />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default FormContainer;
