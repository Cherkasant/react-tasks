import React, { useEffect, useState } from 'react';

import { Theme } from './Constants/@types';
import ThemeProvider from './Context/Theme/ThemeProvider';
import Router from './Pages/Router';

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
