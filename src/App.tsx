import React from 'react';
//@ts-ignore
import styles from './App.module.css';

import Title from './components/title/Title';

const App = () => {
  return (
    <div className={styles.container}>
      <Title name={'Sign in'} />
    </div>
  );
};

export default App;
