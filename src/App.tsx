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

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabFunction = (index: number) => {
    setActiveTab(index);
  };
  const [inputValue, setInputValue] = useState('');

  const onChange = (value: string) => {
    setInputValue(value);
  };

  const [isOpened, SetOpened] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <Button
            className={styles.burger}
            title={!isOpened ? <BurgerIcon /> : <CloseIcon />}
            type={ButtonTypes.Primary}
            onClick={() => SetOpened(!isOpened)}
          />
        </div>

        <div className={styles.block}>
          <Button
            title={''}
            type={ButtonTypes.Search}
            onClick={() => alert('search')}
          />
          <UserName username="Artem_Malkin" />
        </div>
      </nav>
      <Title name={'Sign in'} />

      <Tab disabled={true} />

      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={'Placeholder'}
        title={'Title'}
        error={'error'}
      />
    </div>
  );
};

export default App;
