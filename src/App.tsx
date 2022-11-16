import React from "react";

import { Theme } from "./Constants/@types";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import Router from "./Pages/Router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { setTheme } from "./Redux/Reducers/themeReducer";
import ThemeSelectors from "./Redux/Selectors/themeSelectors";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getTheme);

  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
