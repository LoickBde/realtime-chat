import { ThemeEnum } from '../constants';

export type ThemeContextType = {
  theme: ThemeEnum;
  toggleTheme: () => void;
};
