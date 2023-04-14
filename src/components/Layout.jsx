import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';
import { AppBar } from './appBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
