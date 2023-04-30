// import AppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import Navigation from '../navigation/Navigation';
import AuthNav from '../authNav/AuthNav';
import UserMenu from '../userMenu/UserMenu';
import { Flex } from '@chakra-ui/react';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex justify="space-between" padding="12px">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
