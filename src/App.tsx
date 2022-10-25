import React, { useState } from 'react';
//@ts-ignore
import styles from './App.module.css';

import Title from './components/title/Title';
import UserName from './components/UserName';
import Button, { ButtonTypes } from './components/button/Button';
import Tab from './components/tab/Tab';
import Input from './components/input/Input';
import classnames from 'classnames';
import { BurgerIcon, CloseIcon } from './Assets/icons';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import RegistrationConfirm from './Pages/RegistrationConfirm';
import Success from './Pages/Success';

const App = () => {
  // const [activeTab, setActiveTab] = useState(1);
  // const activeTabFunction = (index: number) => {
  //   setActiveTab(index);
  // };
  // const [inputValue, setInputValue] = useState('');

  // const onChange = (value: string) => {
  //   setInputValue(value);
  // };

  // const [isOpened, SetOpened] = useState(false);

  return (
    <div className={styles.container}>
      <Success />
    </div>
  );
};

export default App;
