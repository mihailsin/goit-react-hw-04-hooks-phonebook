import { nanoid } from 'nanoid';

import React from 'react';
import { Form, Label, Input, Button, Wrapper } from './ContactForm.styled';
class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = nanoid(7);
  numberInputid = nanoid(7);

  inputHandler = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: nanoid(10) });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.submitted(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Wrapper>
          <Label htmlFor={this.nameInputId}>Name</Label>
          <Input
            id={this.nameInputId}
            value={name}
            onChange={this.inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor={this.numberInputid}>Number</Label>
          <Input
            id={this.numberInputid}
            value={number}
            onChange={this.inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add Contact</Button>
        </Wrapper>
      </Form>
    );
  }
}

export default ContactForm;
