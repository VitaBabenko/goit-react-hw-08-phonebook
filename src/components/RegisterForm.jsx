import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import { selectVerify, selectError } from '../redux/auth/authSelectors';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const RegisterForm = () => {
  const verify = useSelector(selectVerify);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
        autoComplete="off"
        onSubmit={handleSubmit}
        isRequired
      >
        <FormLabel requiredIndicator>
          Username
          <Input variant="filled" size="md" type="text" name="name" />
        </FormLabel>
        <FormLabel requiredIndicator>
          Email
          <Input variant="filled" size="md" type="email" name="email" />
        </FormLabel>
        <FormLabel requiredIndicator>
          Password
          <Input variant="filled" size="md" type="password" name="password" />
        </FormLabel>
        {error && <h1>User with this email is already registered!</h1>}
        {verify === false && (
          <h1>Please, visit your email address and active your account!</h1>
        )}
        <Button
          display="flex"
          marginLeft="auto"
          marginRight="auto"
          type="submit"
          size="lg"
          colorScheme="purple"
          variant="solid"
        >
          Register
        </Button>
      </FormControl>
    </Box>
  );
};

export default RegisterForm;
