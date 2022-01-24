import propTypes from 'prop-types';
import { ImBin2 } from 'react-icons/im';

import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button
              onClick={() => {
                deleteHandler(id);
              }}
              type="button"
            >
              <ImBin2 />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
};

export default ContactList;
