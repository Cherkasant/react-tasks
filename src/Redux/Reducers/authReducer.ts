import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload } from "../Types/auth";

const initialState = {};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
  },
});
export const { registerUser } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
