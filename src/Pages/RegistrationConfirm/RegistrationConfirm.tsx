import React from 'react';

import styles from './RegistrationConfirm.module.css';
import FormContainer from '../../components/FormContainer';
import Button, { ButtonTypes } from '../../components/button/Button';
import { useThemeContext } from '../../Context/Theme';
import classNames from 'classnames';
import { Theme } from '../../Constants/@types';

const RegistrationConfirmation = () => {
  const { theme } = useThemeContext();
  return (
    <FormContainer title={'Registration Confirmation'}>
      <>
        <div className={styles.inputsContainer}>
          <div
            className={classNames(styles.forgotPassword, {
              [styles.dark]: theme === Theme.Dark,
            })}
          >
            <div>{'Please activate your account with the activation'}</div>
            <div>
              {'link in the email'} <span>{'example@gmail.com.'}</span>
            </div>
            <div> {'Please, check your email'}</div>
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

export default RegistrationConfirmation;
