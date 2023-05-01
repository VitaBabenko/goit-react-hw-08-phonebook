import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import { Text, Button } from '@chakra-ui/react';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Text fontSize="lg">{name} :</Text>
      <Text fontSize="lg">{number}</Text>
      <Button
        size="md"
        colorScheme="purple"
        variant="solid"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
