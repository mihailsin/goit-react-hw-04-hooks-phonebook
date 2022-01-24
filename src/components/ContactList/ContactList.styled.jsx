import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  margin-left: 10px;

  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;
export { List, Item, Button };
