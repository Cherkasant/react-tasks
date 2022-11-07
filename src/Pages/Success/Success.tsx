import React from 'react';

import styles from './Success.module.css';
import FormContainer from '../../components/FormContainer';
import Button, { ButtonTypes } from '../../components/button/Button';
import classNames from 'classnames';
import { useThemeContext } from '../../Context/Theme';
import { Theme } from '../../Constants/@types';

const Success = () => {
  const { theme } = useThemeContext();
  return (
    <FormContainer title={'Success'}>
      <>
        <div className={styles.inputsContainer}>
          <div
            className={classNames(styles.forgotPassword, {
              [styles.dark]: theme === Theme.Dark,
            })}
          >
            {'Email confirmed.'}
            <div>{'Your registration is now completed'}</div>
          </div>
          <Button
            title={'Go to home'}
            type={ButtonTypes.Primary}
            onClick={() => {}}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default Success;
