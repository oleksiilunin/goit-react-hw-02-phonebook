import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name
          <Field
            type="text"
            name="name"
            maxLength="32"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoFocus
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            maxLength="28"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoFocus
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export { ContactForm };
