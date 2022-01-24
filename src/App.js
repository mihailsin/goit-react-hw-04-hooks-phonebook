import React from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterInputHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContactNames = () => {
    return this.state.contacts.map(contact => contact.name.toLowerCase());
  };

  handleSubmittedData = contact => {
    const existingNames = this.getContactNames();

    if (existingNames.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('App render');
    const filteredContacts = this.filterContacts();
    return (
      <Grid>
        <GridContainer>
          <h1>Phonebook</h1>
          <ContactForm submitted={this.handleSubmittedData} />
        </GridContainer>

        <GridContainer>
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            inputHandler={this.filterInputHandler}
          />
          <ContactList
            contacts={filteredContacts}
            deleteHandler={this.deleteContact}
          />
        </GridContainer>
      </Grid>
    );
  }
}

export default App;
