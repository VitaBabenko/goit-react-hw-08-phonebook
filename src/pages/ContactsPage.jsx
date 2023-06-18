import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactForm } from '../components/ContactForm';
import { Spinner } from '@chakra-ui/react';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/contactsSelectors';
import { Heading } from '@chakra-ui/react';

const ContactsPage = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);
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
      {contacts.length > 0 && (
        <>
          <Heading
            as="h2"
            fontSize="3xl"
            color="purple"
            align="center"
            marginTop="40px"
            marginBottom="35px"
          >
            Contacts
          </Heading>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={visibleFilter} />
        </>
      )}
    </>
  );
};

export default ContactsPage;
