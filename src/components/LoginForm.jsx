import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginFrom = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormControl
        as="form"
        width="400px"
        onSubmit={handleSubmit}
        autoComplete="off"
        isRequired
      >
        <FormLabel requiredIndicator>
          Email
          <Input variant="filled" size="md" type="email" name="email" />
        </FormLabel>
        <FormLabel requiredIndicator>
          Password
          <Input variant="filled" size="md" type="password" name="password" />
        </FormLabel>
        <Button
          display="flex"
          marginLeft="auto"
          marginRight="auto"
          size="lg"
          colorScheme="purple"
          variant="solid"
          type="submit"
        >
          Log In
        </Button>
      </FormControl>
    </Box>
  );
};

export default LoginFrom;
