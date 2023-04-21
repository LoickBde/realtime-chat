import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <h1 className="bg-ctp-base text-ctp-pink">Hello world!</h1>
      <Outlet />
    </>
  );
};
