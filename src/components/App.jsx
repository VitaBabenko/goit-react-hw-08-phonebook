import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Contacts from '../pages/contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
