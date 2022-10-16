import React from 'react';
//@ts-ignore
import styles from './App.module.css';

import Title from './components/title/Title';
import Hamburger from './components/hamburger/Hamburger';
import UserName from './components/UserName';
import Button, { ButtonTypes } from './components/button/Button';
import Tabs from './components/tabs/Tabs';

const App = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <Hamburger onClick={() => alert('test')} />
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
      <Tabs />
    </div>
  );
};

export default App;
