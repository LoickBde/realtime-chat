import { Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 className="bg-ctp-base text-ctp-pink">Hello world!</h1>
            <Outlet />
          </div>
        }
      >
        <Route index element={<h1>Home !</h1>} />
        <Route path="chat" element={<h1>Chat !</h1>} />
        <Route path="*" element={<h1>Error !</h1>} />
      </Route>
    </Routes>
  );
};
