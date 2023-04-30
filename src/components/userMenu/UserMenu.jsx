import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <HStack spacing="70px">
      <p>Welcome, {user.name}!</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        size="lg"
        colorScheme="purple"
        variant="solid"
      >
        Logout
      </Button>
    </HStack>
  );
};

export default UserMenu;
