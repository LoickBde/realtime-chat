import { Outlet } from '@tanstack/router';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { Menu } from '../Menu';

export const Root = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} bg-ctp-base text-ctp-text w-screen h-screen flex flex-row`}
    >
      <Menu />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};
