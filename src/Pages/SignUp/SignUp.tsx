import React, { useState } from "react";

import styles from "./SignUp.module.css";
import FormContainer from "../../components/FormContainer";
import Input from "../../components/input/Input";
import Button, { ButtonTypes } from "../../components/button/Button";
import { PathNames } from "../Router/Router";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Reducers/authReducer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUp = () => {
    dispatch(
      registerUser({
        data: { username: name, email: login, password },
        callback: () =>
          navigate(PathNames.RegistrationConfirmation, {
            state: { email: login },
          }),
      })
    );
  };

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={"Name"}
            placeholder={"Your name"}
            value={name}
            onChange={(value: string) => setName(value)}
          />
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={"Confirm password"}
            placeholder={"Confirm password"}
            value={passwordConfirm}
            onChange={(value: string) => setPasswordConfirm(value)}
          />
        </div>
        <div className={styles.forgotPassword}>{"Forgot password?"}</div>
        <Button
          title={"Sign Up"}
          type={ButtonTypes.Primary}
          onClick={onSignUp}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {"Don’t have an account?"}{" "}
          <NavLink to={PathNames.SignIn} className={styles.redirectButton}>
            {"Sign In"}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
