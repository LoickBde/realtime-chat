// import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { Chats } from '../Chats';
import { Conversation } from '../Conversation';
import { Menu } from '../Menu';

export const Root = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div
        className={`${theme} bg-ctp-base text-ctp-text w-screen h-screen flex`}
      >
        {/* <Outlet /> */}
        <Menu />
        <Chats />
        <Conversation />
      </div>
    </main>
  );
};
