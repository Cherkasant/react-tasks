import React, { useState } from 'react';

//@ts-ignore
import styles from './SignIn.module.css';
import classnames from 'classnames';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/input/Input';
import Button, { ButtonTypes } from '../../components/button/Button';

const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <FormContainer title={'Sign in'}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={'Email'}
            placeholder={'Your email'}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={'Password'}
            placeholder={'Your password'}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
        </div>
        <div className={styles.forgotPassword}>{'Forgot password?'}</div>
        <Button
          title={'Sign In'}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {'Don’t have an account?'} <span>{'Sign Up'}</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
