import { FiUserMinus } from 'react-icons/fi';
import {
  List,
  Item,
  ItemWrapper,
  DeleteButton,
  NameSpan,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  const sortedList = contacts.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
  return (
    <List>
      {sortedList.map(({ id, name, number }) => (
        <Item key={id}>
          <ItemWrapper>
            <NameSpan>{name}:</NameSpan> <span>{number}</span>
          </ItemWrapper>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            <FiUserMinus />
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export { ContactsList };
