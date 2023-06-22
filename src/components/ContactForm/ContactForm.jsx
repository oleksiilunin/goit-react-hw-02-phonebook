const ContactForm = ({ stateName, onSubmit, onChangeName }) => {
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
          autoFocus
          required
          onChange={onChangeName}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export { ContactForm };
