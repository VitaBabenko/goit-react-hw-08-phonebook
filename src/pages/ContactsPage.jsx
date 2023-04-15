import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Loader } from '../components/Loader';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {contacts && (
        <>
          <h1>Contacts</h1>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default ContactsPage;
