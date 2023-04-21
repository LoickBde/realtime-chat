import { Route, Routes } from 'react-router-dom';
import { Root } from '../Root';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<h1>Home !</h1>} />
        <Route path="chat" element={<h1>Chat !</h1>} />
        <Route path="*" element={<h1>Error !</h1>} />
      </Route>
    </Routes>
  );
};
