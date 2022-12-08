import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  RegisterUserPayload,
  SignInUserPayload,
} from "../Types/auth";
import { ACCESS_TOKEN_KEY } from "../../Constants/consts";

const initialState = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    signInUser: (state, action: PayloadAction<SignInUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getUserName: (state, action: PayloadAction<undefined>) => {},
    setUserName: (state, action: PayloadAction<any>) => {
      state.userName = action.payload;
    },
    logoutUser: (state, action: PayloadAction<undefined>) => {},
  },
});
export const {
  registerUser,
  activateUser,
  signInUser,
  setLoggedIn,
  getUserName,
  setUserName,
  logoutUser,
} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
