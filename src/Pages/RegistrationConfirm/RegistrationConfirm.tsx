import React from 'react';

//@ts-ignore
import styles from './RegistrationConfirm.module.css';
import classnames from 'classnames';
import FormContainer from '../../components/FormContainer';
import Button, { ButtonTypes } from '../../components/button/Button';

const RegistrationConfirmation = () => {
  return (
    <FormContainer title={'Registration Confirmation'}>
      <>
        <div className={styles.inputsContainer}>
          <div className={styles.forgotPassword}>
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
