import React, { useMemo } from 'react';
import { PathNames } from '../../../Pages/Router/Router';
import SignIn from '../../../Pages/SignIn';
import Button, { ButtonTypes } from '../../button';
import ThemeSwitcher from '../../ThemeSwitcher';
import styles from './Menu.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import UserName from '../../UserName';

export const isLoggedIn = true;

const Menu = () => {
  const navButtons = useMemo(
    () => [
      { title: 'Home', link: PathNames.Home },
      ...(isLoggedIn ? [{ title: 'Add Post', link: PathNames.AddPost }] : []),
    ],
    [isLoggedIn]
  );

  const navigate = useNavigate();

  const onFooterButtonClick = () => {
    navigate(PathNames.SignIn);
  };

  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div>
        {isLoggedIn && <UserName username={'Artem_Malkin'} />}
        {navButtons.map(({ link, title }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className={classNames(styles.navButton, {
                [styles.activeNavButton]: pathname === link,
              })}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
      <div>
        <ThemeSwitcher />
        <Button
          title={isLoggedIn ? 'Log Out' : 'Sign in'}
          type={ButtonTypes.Secondary}
          className={styles.footerButton}
          onClick={onFooterButtonClick}
        />
      </div>
    </div>
  );
};

export default Menu;
