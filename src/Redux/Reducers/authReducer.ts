import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivateUserPayload, RegisterUserPayload } from "../Types/auth";

const initialState = {};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
  },
});
export const { registerUser, activateUser } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
