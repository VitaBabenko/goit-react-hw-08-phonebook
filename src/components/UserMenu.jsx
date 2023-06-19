import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/auth/authSelectors';
import { logOutUser } from '../redux/auth/authOperations';
import { HStack, Button, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <HStack spacing="70px">
      <Text as="b" fontSize="3xl" color="tomato" textTransform="capitalize">
        Welcome, {user.name}!
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logOutUser())}
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
