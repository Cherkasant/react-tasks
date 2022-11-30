import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Reducers/themeReducer";
import postsReducer from "./Reducers/postsReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Sagas/rootSaga";
import authReducer from "./Reducers/authReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { themeReducer, postsReducer, authReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
