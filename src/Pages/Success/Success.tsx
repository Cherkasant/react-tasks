import React from "react";

import styles from "./Success.module.css";
import FormContainer from "../../components/FormContainer";
import Button, { ButtonTypes } from "../../components/button/Button";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activateUser } from "../../Redux/Reducers/authReducer";
import { PathNames } from "../Router/Router";

const Success = () => {
  const { theme } = useThemeContext();
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onConfirm = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => {
            navigate(PathNames.SignIn);
          },
        })
      );
    }
  };
  return (
    <FormContainer title={"Success"}>
      <>
        <div className={styles.inputsContainer}>
          <div
            className={classNames(styles.forgotPassword, {
              [styles.dark]: theme === Theme.Dark,
            })}
          >
            {"You need to confirm your email"}
            <div>{"Please confirm"}</div>
          </div>
          <Button
            title={"Confirm"}
            type={ButtonTypes.Primary}
            onClick={onConfirm}
            className={styles.button}
          />
        </div>
      </>
    </FormContainer>
  );
};

export default Success;
