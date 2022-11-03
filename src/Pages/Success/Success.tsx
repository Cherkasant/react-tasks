import React from 'react';

//@ts-ignore
import styles from './Success.module.css';
import FormContainer from '../../components/FormContainer';
import Button, { ButtonTypes } from '../../components/button/Button';

const Success = () => {
  return (
    <FormContainer title={'Success'}>
      <>
        <div className={styles.inputsContainer}>
          <div className={styles.forgotPassword}>
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
