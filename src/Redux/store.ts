import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Reducers/themeReducer";
import postsReducer from "./Reducers/postsReducer";

export const store = configureStore({
  reducer: { themeReducer, postsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
