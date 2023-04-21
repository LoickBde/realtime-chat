// import { Outlet } from 'react-router-dom';
// import { ThemeSwitcher } from '../ThemeSwitcher';
// import { useContext } from 'react';
// import { ThemeContext } from '../../context';
import { ThemeEnum } from '../../constants';
import { Chatbar } from '../Chatbar';
import { Conversation } from '../Conversation';
import { Sidebar } from '../Sidebar';

export const Root = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div
        className={`${ThemeEnum.DARK} bg-ctp-base w-screen h-screen flex flex-row`}
      >
        {/* <ThemeSwitcher /> */}
        {/* <Outlet /> */}
        <Sidebar />
        <Chatbar />
        <Conversation />
      </div>
    </main>
  );
};
