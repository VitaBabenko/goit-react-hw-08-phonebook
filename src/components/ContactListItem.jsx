import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import { Text, Button } from '@chakra-ui/react';

export const ContactListItem = ({ contact: { _id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Text fontSize="lg">{name} :</Text>
      <Text fontSize="lg">{phone}</Text>
      <Button
        size="md"
        colorScheme="purple"
        variant="solid"
        type="button"
        onClick={() => dispatch(deleteContact(_id))}
      >
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
