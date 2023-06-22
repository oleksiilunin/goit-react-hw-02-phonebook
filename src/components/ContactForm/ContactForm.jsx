const ContactForm = ({ stateName, stateNumber, onSubmit, onChangeInput }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={stateName}
          maxLength="32"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoFocus
          required
          onChange={onChangeInput}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={stateNumber}
          maxLength="32"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoFocus
          required
          onChange={onChangeInput}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export { ContactForm };
