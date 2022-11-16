import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from "../Blog";
import PagesWrapper from "../PagesWrapper";
import RegistrationConfirm from "../RegistrationConfirm";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Success from "../Success";
import ResetPassword from "../ResetPassword";

export enum PathNames {
  Home = "/",
  AddPost = "/posts/add",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/sign-up/confirm",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
  ContentPage = "/content",
  ResetPassword = "/reset",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={PathNames.Home}></Route> */}
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.ContentPage} element={<Blog />} />
          <Route
            path={PathNames.RegistrationConfirmation}
            element={<RegistrationConfirm />}
          />
          <Route path={PathNames.RegistrationSuccess} element={<Success />} />
          <Route path={PathNames.ResetPassword} element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
