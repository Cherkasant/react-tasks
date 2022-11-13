import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import styles from "../RegistrationConfirm/RegistrationConfirm.module.css";
import classNames from "classnames";
import { Theme } from "../../Constants/@types";
import Button, { ButtonTypes } from "../../components/button";
import { useThemeContext } from "../../Context/Theme";
import Input from "../../components/input";

const ResetPassword = () => {
  const { theme } = useThemeContext();
  const [password, setPassword] = useState("");
  return (
    <FormContainer title={"Reset password"}>
      <>
        <div
          className={classNames(styles.inputsContainer, {
            [styles.dark]: theme === Theme.Dark,
          })}
        >
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />

          <Button
            title={"Reset"}
            type={ButtonTypes.Primary}
            onClick={() => {}}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default ResetPassword;
