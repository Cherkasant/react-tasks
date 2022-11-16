import React, { useState } from 'react';

import styles from './SignIn.module.css';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/input/Input';
import Button, { ButtonTypes } from '../../components/button/Button';
import { NavLink } from 'react-router-dom';
import { PathNames } from '../Router/Router';
import { useThemeContext } from '../../Context/Theme';

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
          {'Don’t have an account?'}{' '}
          <NavLink to={PathNames.SignUp} className={styles.redirectButton}>
            {'Sign Up'}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
