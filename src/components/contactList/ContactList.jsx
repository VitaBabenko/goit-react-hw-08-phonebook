import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts } from '../../redux/contacts/selectors';
// import { Filter } from '../filter/Filter';
import { ContactListItem } from '../contactListItem/ContactListItem';
import { Title, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Title>Contacts</Title>
      {/* <Filter /> */}
      <List>
        {contacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <ContactListItem contact={contact} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
