import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const { id, title, category } = props;
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
    </tr>

  );
};

Books.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,

};
export default Books;
