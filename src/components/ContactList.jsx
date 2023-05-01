import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { ListItem, OrderedList } from '@chakra-ui/react';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <OrderedList
        display="flex"
        flexDirection="column"
        gap="15px"
        marginTop="30px"
        color="purple"
        width="400px"
        marginLeft="auto"
        marginRight="auto"
        padding="15px"
      >
        {contacts.map(contact => {
          return (
            <ListItem
              key={contact.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="45px"
            >
              <ContactListItem contact={contact} />
            </ListItem>
          );
        })}
      </OrderedList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
