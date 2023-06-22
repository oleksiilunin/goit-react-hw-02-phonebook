import { Component } from 'react';

import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { GlobalStyles } from 'components/GlobalStyles';

// import { nanoid } from 'nanoid/non-secure'
// const id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqLJ"

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    this.setState(
      prevState => (
        {
          contacts: [...prevState.contacts, this.state.name],
          name: '',
        },
        console.log(this.state)
      )
    );
  };

  render() {
    return (
      <AppContainer>
        <Header headerTitle="Phonebook" />
        <Section>
          <ContactForm
            stateName={this.state.name}
            onChangeName={this.handleChangeName}
            onSubmit={this.addContact}
          />
        </Section>
        <Section>
          <h2></h2>
          <ul></ul>
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
