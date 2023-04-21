import { createContext } from 'react';
import { ThemeContextType } from './types';
import { ThemeEnum } from '../constants';

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.LIGHT,
  toggleTheme: () => {},
});
