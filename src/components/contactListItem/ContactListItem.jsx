import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import { Name, Tel, Btn } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Name>{name} :</Name>
      <Tel>{number}</Tel>
      <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Btn>
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
