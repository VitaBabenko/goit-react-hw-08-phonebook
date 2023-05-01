import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Container, Box, Spinner } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW="1200px">
      <Header />
      <Box as="main" padding="20px">
        <Suspense
          fallback={
            <Spinner
              display="flex"
              marginLeft="auto"
              marginRight="auto"
              marginTop="100px"
              color="tomato"
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
            />
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
