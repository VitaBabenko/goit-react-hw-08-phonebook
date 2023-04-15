import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  Form,
  FormField,
  Field,
  Btn,
  ErrorMessage,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces!'
    ),
  number: Yup.string()
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

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <FormField>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field name="number" type="tel" />
            <ErrorMessage name="number" component="span" />
          </FormField>
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Formik>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
};
