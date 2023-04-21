import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={() => toggleTheme()}>Toggle theme</button>;
};
