import React, { useState } from "react";
import {
  BurgerIcon,
  CloseIcon,
  LogInIcon,
  SearchIcon,
} from "../../Assets/icons";
import Button, { ButtonTypes } from "../button";
import UserName from "../UserName";
import styles from "./Header.module.css";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";
import Input from "../input";
import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Selectors/authSelectors";

const Header = () => {
  const [isOpened, setOpened] = useState(false);
  const changeBurger = () => {
    setOpened(!isOpened);
  };

  const navigate = useNavigate();
  const onLogInButton = () => {
    navigate(PathNames.SignIn);
  };

  const [isClickedSearch, setSearchClick] = useState(false);
  const clickedSearchButton = () => {
    setSearchClick(!isClickedSearch);
  };

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.container}>
      <Button
        title={isOpened ? <CloseIcon /> : <BurgerIcon />}
        type={ButtonTypes.Primary}
        onClick={changeBurger}
        className={styles.burgerButton}
      />
      {isOpened && <Menu />}
      <div className={styles.inputContainer}>
        {!isOpened && isClickedSearch && (
          <Input
            value={inputValue}
            onChange={onChange}
            placeholder={"Search..."}
            className={styles.customInput}
            type={"Search"}
          />
        )}
      </div>

      <div className={styles.searchButtons}>
        <Button
          title={<SearchIcon />}
          type={ButtonTypes.Primary}
          className={styles.searchButton}
          onClick={clickedSearchButton}
        />
        {isLoggedIn && !!UserName ? (
          <UserName username={userName} />
        ) : (
          <Button
            title={<LogInIcon />}
            type={ButtonTypes.Primary}
            className={styles.burgerButton}
            onClick={onLogInButton}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
