import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Loader } from '../components/Loader';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/contactsSelectors';

const ContactsPage = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const visibleFilter = (() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  })();

  return (
    <>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={visibleFilter} />
        </>
      )}
    </>
  );
};

export default ContactsPage;
