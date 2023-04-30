import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';
import { Header } from './header/Header';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW="1200px">
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
