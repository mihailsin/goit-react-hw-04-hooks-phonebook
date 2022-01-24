import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { Label, Input, Wrapper } from '../ContactForm/ContactForm.styled';
const Filter = ({ value, inputHandler }) => {
  const filterInputId = nanoid(7);

  return (
    <Wrapper>
      <Label htmlFor={filterInputId}>Filter</Label>
      <Input
        onChange={inputHandler}
        id={filterInputId}
        value={value}
        type="text"
        name="filter"
        required
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  inputHandler: propTypes.func.isRequired,
};

export default Filter;
