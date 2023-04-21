import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

export const Root = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div className={`${theme} bg-ctp-base`}>
        <h1 className="text-ctp-pink">Hello world!</h1>
        <ThemeSwitcher />
        <Outlet />
      </div>
    </main>
  );
};
