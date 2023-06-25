import { Component } from 'react';

import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { GlobalStyles } from 'components/GlobalStyles';
import testContacts from '../../data/contacts.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

class App extends Component {
  state = {
    contacts: testContacts,
    filter: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = newContact => {
    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? toast.error(`${newContact.name}: is already in contacts`, notifyOptions)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact].sort(
            (firstContact, secondContact) =>
              firstContact.name
                .toLowerCase()
                .localeCompare(secondContact.name.toLowerCase())
          ),
        }));
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    return this.setState({
      contacts: newContacts,
      filter: '',
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <Header headerTitle="Phonebook" />
        <Section>
          <ContactForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filterValue={filter} onChangeInput={this.handleChangeInput} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>

        <GlobalStyles />
        <ToastContainer />
      </AppContainer>
    );

    /* <h1>{title}</h1>
      <section>
        <form action=""></form>
      </section>
      <section>
         <h2></h2>
         <ul></ul>
      </section>  */

    // <Phonebook>
    //   <Form>
    //   </Form>
    //   <Contacts>
    //   </Contacts>
    // </Phonebook>
  }
}

export { App };
