import { Theme } from '../../Constants/@types';
import { useContext, createContext } from 'react';

type ThemeContextType = {
  theme: Theme;
  onChangeTheme: (value: Theme) => void;
};

const DEFAULT_VALUE = {
  theme: Theme.Light,
  onChangeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(DEFAULT_VALUE);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
