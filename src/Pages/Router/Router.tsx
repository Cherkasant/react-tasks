import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesWrapper from "../PagesWrapper";
import RegistrationConfirm from "../RegistrationConfirm";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Success from "../Success";
import ResetPassword from "../ResetPassword";
import ContentPage from "../ContentPage";

export enum PathNames {
  Home = "/",
  AddPost = "/posts/add",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/sign-up/confirm",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
  ContentPage = "/content/:id",
  ResetPassword = "/reset",
  ActivateUser = "/activate/:uid/:token",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.ContentPage} element={<ContentPage />} />
          <Route
            path={PathNames.RegistrationConfirmation}
            element={<RegistrationConfirm />}
          />
          <Route path={PathNames.ActivateUser} element={<Success />} />
          <Route path={PathNames.ResetPassword} element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
