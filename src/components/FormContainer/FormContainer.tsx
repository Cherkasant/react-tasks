import React, { ReactElement, FC } from 'react';

//@ts-ignore
import styles from './FormContainer.module.css';
import classnames from 'classnames';
import Title from '../title';

type FormContainerProps = {
  title: string;
  children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.goBackButton}>{'Back to home'}</div>
        <Title name={title} />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default FormContainer;