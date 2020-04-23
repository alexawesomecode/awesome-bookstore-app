import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const {
    id, title, category, handleRemoveBook,
  } = props;

  return (
    <tr className="bookitem">
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>

        <button type="button" onClick={() => handleRemoveBook({ id, title, category })}>remove</button>
      </td>
    </tr>

  );
};

Books.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,

};
export default Books;
