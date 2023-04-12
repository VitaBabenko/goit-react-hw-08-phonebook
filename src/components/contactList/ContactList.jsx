import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { ContactListItem } from '../contactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem contact={contact} />
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
