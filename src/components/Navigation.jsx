import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { HStack, Button } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HStack spacing="70px">
      <Button size="lg" colorScheme="purple" variant="outline">
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn && (
        <Button size="lg" colorScheme="purple" variant="outline">
          <NavLink to="/contacts">Contacts</NavLink>
        </Button>
      )}
    </HStack>
  );
};

export default Navigation;
