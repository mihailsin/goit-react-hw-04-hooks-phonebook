import React, { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterInputHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const getContactNames = () => {
    return contacts.map(contact => contact.name.toLowerCase());
  };

  const handleSubmittedData = contact => {
    const existingNames = getContactNames();

    if (existingNames.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const filterContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = filterContacts();
  return (
    <Grid>
      <GridContainer>
        <h1>Phonebook</h1>
        <ContactForm submitted={handleSubmittedData} />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter value={filter} inputHandler={filterInputHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteHandler={deleteContact}
        />
      </GridContainer>
    </Grid>
  );
};

export default App;
