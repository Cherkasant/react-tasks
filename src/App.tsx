import React, { useState } from 'react';
//@ts-ignore
import styles from './App.module.css';

import Title from './components/title/Title';
import Hamburger from './components/hamburger/Hamburger';
import UserName from './components/UserName';
import Button, { ButtonTypes } from './components/button/Button';
import Tab from './components/tab/Tab';
import classnames from 'classnames';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabFunction = (index: number) => {
    setActiveTab(index);
  };

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

      <div className={styles.tabs}>
        <Tab
          title={'All'}
          onClick={() => activeTabFunction(1)}
          className={activeTab === 1 ? classnames(styles.active) : ''}
        />
        <Tab
          className={activeTab === 2 ? classnames(styles.active) : ''}
          title={'My favorites'}
          onClick={() => activeTabFunction(2)}
        />
        <Tab
          className={activeTab === 3 ? classnames(styles.active) : ''}
          title={'Popular'}
          onClick={() => activeTabFunction(3)}
        />
      </div>
    </div>
  );
};

export default App;
