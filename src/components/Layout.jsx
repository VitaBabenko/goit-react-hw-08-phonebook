import { Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
