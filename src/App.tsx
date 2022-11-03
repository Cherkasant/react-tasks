import React, { useEffect, useState } from 'react';
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
import Card from './components/Card';
import { CardSize } from './components/Card/Card';
import CardList from './components/CardList';
import { CardListType, CardType, Theme } from './Constants/@types';
import ThemeProvider from './Context/Theme/ThemeProvider';

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

  const MOCK_CARD = {
    id: 0,
    image: 'https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg',
    text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    date: '2021-12-12',
    lesson_num: 0,
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
    author: 0,
  };

  const MOCK_CARDS_LIST = [
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
  ];

  const [cardsList, setCardsList] = useState<Array<CardType> | null>(null);

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST);
  }, []);

  const [theme, setTheme] = useState(Theme.Dark);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className={styles.container}>
        {/* <CardList cardsList={cardsList} /> */}
        {/* <SignIn /> */}
        <SignUp />
      </div>
    </ThemeProvider>
  );
};

export default App;
