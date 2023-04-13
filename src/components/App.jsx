import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './appBar/AppBar';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from '../pages/contacts/ContactsPage';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
