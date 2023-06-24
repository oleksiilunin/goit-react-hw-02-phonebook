const ContactsList = ({ contacts, onDeleteContact }) => {
  const sortedList = contacts.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
  return (
    <ul>
      {sortedList.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactsList };
