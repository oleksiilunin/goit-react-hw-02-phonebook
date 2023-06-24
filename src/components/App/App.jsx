import { Component } from 'react';

import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { GlobalStyles } from 'components/GlobalStyles';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = e => {
    e.preventDefault();
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: id, name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    }));
    console.log(this.state);
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <Header headerTitle="Phonebook" />
        <Section>
          <ContactForm
            stateName={this.state.name}
            stateNumber={this.state.number}
            onChangeInput={this.handleChangeInput}
            onSubmit={this.addContact}
          />
        </Section>
        <Section title="Contacts">
          <Filter state={this.state} onChangeInput={this.handleChangeInput} />
          <ContactsList contacts={filteredContacts} />
        </Section>

        <GlobalStyles />
      </AppContainer>
    );

    {
      /* <h1>{title}</h1>
      <section>
        <form action=""></form>
      </section>
      <section>
         <h2></h2>
         <ul></ul>
      </section>  */
    }

    // <Phonebook>
    //   <Form>
    //   </Form>
    //   <Contacts>
    //   </Contacts>
    // </Phonebook>
  }
}

export { App };
