import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { Loader } from '../../components/Loader';
import { Filter } from '../../components/filter/Filter';
import { ContactList } from '../../components/contactList/ContactList';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { Container, Title, SecondTitle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
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

export default Contacts;
