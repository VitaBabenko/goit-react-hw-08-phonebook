import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/authSelectors';
import { logInUser } from '../redux/auth/authOperations';
import { Spinner } from '@chakra-ui/react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';

const LoginFrom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(logInUser(data));
    reset();
  };

  return (
    <>
      {isLoading && !error && (
        <Spinner
          display="flex"
          marginLeft="auto"
          marginRight="auto"
          marginTop="80px"
          color="tomato"
          size="xl"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
        />
      )}
      {!isLoading && (
        <Box display="flex" justifyContent="center">
          <FormControl
            as="form"
            width="400px"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <FormLabel requiredIndicator>
              Email
              <Input
                variant="filled"
                size="md"
                type="email"
                {...register('email', {
                  required: 'The field is required!',
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Please enter correct email!',
                  },
                })}
              />
            </FormLabel>
            {errors?.email && (
              <Text fontSize="15px" color="red">
                {errors?.email?.message}
              </Text>
            )}
            <FormLabel requiredIndicator>
              Password
              <Input
                variant="filled"
                size="md"
                type="password"
                {...register('password', {
                  required: 'The field is required!',
                  minLength: {
                    value: 8,
                    message: 'At least 8 characters are required!',
                  },
                })}
              />
            </FormLabel>
            {errors?.password && (
              <Text fontSize="15px" color="red">
                {errors?.password?.message}
              </Text>
            )}
            {error && (
              <Box color="red" height="50px">
                Email or password is wrong!
              </Box>
            )}
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
      )}
    </>
  );
};

export default LoginFrom;
