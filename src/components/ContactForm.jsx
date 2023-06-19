import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/contactsOperations';
import { selectContacts } from '../redux/contacts/contactsSelectors';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces!'
    ),
  phone: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (values, actions) => {
    contacts.filter(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    ).length
      ? toast.error(`${values.name} is already in contacts!`)
      : dispatch(addContact(values));

    actions.resetForm();
  };

  const validateName = value => {
    let error;
    if (value === '') {
      error = 'Required';
    }
    return error;
  };

  return (
    <>
      <Heading
        as="h2"
        fontSize="3xl"
        color="purple"
        align="center"
        marginBottom="15px"
      >
        Phonebook
      </Heading>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleFormSubmit}
      >
        <Box
          width="400px"
          border="1px"
          borderRadius="10px"
          borderColor="purple"
          padding="18px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel color="purple">
                    Name
                    <Input
                      {...field}
                      variant="filled"
                      name="name"
                      type="text"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormLabel>
                </FormControl>
              )}
            </Field>
            <Field name="phone" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel color="purple">
                    Number
                    <Input
                      {...field}
                      variant="filled"
                      name="phone"
                      type="tel"
                    />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormLabel>
                </FormControl>
              )}
            </Field>
            <Button
              display="flex"
              marginLeft="auto"
              marginRight="auto"
              type="submit"
              size="md"
              colorScheme="purple"
              variant="solid"
            >
              Add contact
            </Button>
          </Form>
        </Box>
      </Formik>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
};
