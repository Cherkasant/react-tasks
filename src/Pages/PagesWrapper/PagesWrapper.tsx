import React from 'react';
import Header from '../../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './PagesWrapper.module.css';
import { PathNames } from '../Router/Router';
import Home from '../Home';
import { useThemeContext } from '../../Context/Theme';
import classNames from 'classnames';
import { Theme } from '../../Constants/@types';
import Footer from '../../components/Footer';

const PagesWrapper = () => {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <Header />
      {pathname === PathNames.Home ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default PagesWrapper;
