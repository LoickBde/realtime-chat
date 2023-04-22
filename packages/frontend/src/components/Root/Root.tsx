// import { Outlet } from 'react-router-dom';
// import { ThemeSwitcher } from '../ThemeSwitcher';
// import { useContext } from 'react';
// import { ThemeContext } from '../../context';
import { ThemeEnum } from '../../constants';
import { Chats } from '../Chats';
import { Conversation } from '../Conversation';
import { Menu } from '../Menu';

export const Root = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div
        className={`${ThemeEnum.DARK} bg-ctp-base w-screen h-screen flex flex-row`}
      >
        {/* <ThemeSwitcher /> */}
        {/* <Outlet /> */}
        <Menu />
        <Chats />
        <Conversation />
      </div>
    </main>
  );
};
