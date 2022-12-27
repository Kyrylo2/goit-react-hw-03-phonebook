import React from 'react';
import ContactsForm from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';
// import styled from '@emotion/styled';

import Typography from '@mui/material/Typography';

// const TitleH1 = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
// `;

// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  getFormData = ({ name, number }, id) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: name, number: number, id: id }],
    }));
  };

  filterContacts = contactsArr => {
    this.setState({
      contacts: [...contactsArr],
    });
  };

  setFilterToState = data => {
    this.setState({ ...this.state, filter: `${data}` });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactsFilterData = filterData => {
    let newArr = filterData.filter(el =>
      el.name.toLowerCase().includes(this.state.filter)
    );
    return newArr;
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <Typography
          variant="h3"
          variantMapping={{ h3: 'h1' }}
          gutterBottom
          align="center"
        >
          Phonebook
        </Typography>
        <ContactsForm onSubmit={this.getFormData} />

        {this.state.contacts.length > 1 || this.state.filter !== '' ? (
          <Filter filterDataToState={this.setFilterToState} />
        ) : null}

        {this.state.contacts.length !== 0 ? (
          <ContactList
            contacts={this.contactsFilterData(this.state.contacts)}
            onDelete={this.deleteContact}
          />
        ) : null}
      </>
    );
  }
}

export default App;
