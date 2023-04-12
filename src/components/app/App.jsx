import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../contactForm/ContactForm';
import { Loader } from '../Loader';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contactList/ContactList';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { Container, Title, SecondTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && (
        <>
          <SecondTitle>Contacts</SecondTitle>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
