import { useCallback, useMemo, useState } from 'react';
import { ThemeEnum } from '../../constants';
import { ThemeContext } from '../../context';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(ThemeEnum.LIGHT);

  const toggleTheme = useCallback(
    () =>
      setTheme((theme) =>
        theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
      ),
    []
  );

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
