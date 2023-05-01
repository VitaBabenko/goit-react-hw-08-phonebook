import { NavLink } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <HStack spacing="40px">
      <Button size="lg" colorScheme="purple" variant="solid">
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button size="lg" colorScheme="purple" variant="solid">
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </HStack>
  );
};

export default AuthNav;
