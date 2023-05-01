import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { Box, Flex } from '@chakra-ui/react';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="header" padding="15px">
      <Flex justify="space-between">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
