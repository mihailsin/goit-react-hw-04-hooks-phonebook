import styled from 'styled-components';

const Form = styled.form``;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;
const Label = styled.label``;
const Input = styled.input`
  margin-bottom: 10px;
`;
const Button = styled.button`
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`;
export { Form, Label, Input, Button, Wrapper };
