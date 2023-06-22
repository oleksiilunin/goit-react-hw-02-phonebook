import { Component } from 'react';

import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { GlobalStyles } from 'components/GlobalStyles';
import { nanoid } from 'nanoid';

// import { nanoid } from 'nanoid/non-secure'
// const id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqLJ"

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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

  render() {
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
          <Contacts contacts={this.state.contacts} />
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
