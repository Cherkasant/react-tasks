import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  activateUser,
  getUserName,
  logoutUser,
  registerUser,
  setLoggedIn,
  setUserName,
  signInUser,
} from "../Reducers/authReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  RegisterUserPayload,
  SignInUserPayload,
} from "../Types/auth";
import API from "../utils/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../Constants/consts";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const { data: registerData, callback } = action.payload;
  const { ok, problem } = yield call(API.registerUser, registerData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user", problem);
  }
}
function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { data: activateData, callback } = action.payload;
  const { ok, problem } = yield call(API.activateUser, activateData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while activating user", problem);
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const { data: SignInUserData, callback } = action.payload;
  const { ok, problem, data } = yield call(API.signInUser, SignInUserData);
  if (ok) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data?.refresh);
    yield put(setLoggedIn(true));
    callback();
  } else {
    console.warn("Error while sign in user", problem);
  }
}

function* getUserNameWorker() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || "";
  const { ok, data, problem } = yield call(API.getUserName, accessToken);
  if (ok && data) {
    yield put(setUserName(data.username));
  } else {
    console.warn("Error while  fetching username: ", problem);
  }
}

function* logOutUserWorker() {
  yield put(setLoggedIn(true));
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export default function* authSagaWatcher() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activateUser, activateUserWorker),
    takeLatest(signInUser, signInUserWorker),
    takeLatest(getUserName, getUserNameWorker),
    takeLatest(logoutUser, logOutUserWorker),
  ]);
}
