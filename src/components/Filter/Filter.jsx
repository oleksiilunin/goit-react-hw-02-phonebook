import React from 'react';
import { FiSearch } from 'react-icons/fi';

import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChangeInput }) => {
  return (
    <label>
      <FiSearch />
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoFocus
        required
        onChange={onChangeInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export { Filter };
