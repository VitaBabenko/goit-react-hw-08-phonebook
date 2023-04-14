import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Loader } from '../components/Loader';
import { ContactList } from '../components/contactList/ContactList';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
