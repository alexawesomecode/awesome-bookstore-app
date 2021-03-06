import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const {
    id, title, category, handleRemoveBook,
  } = props;

  return (
    <div className="bookcontainer">
      <div className="bookitem">
        <div className="bookid">
          ID:
          {' '}
          {id}
        </div>
        <div className="bookcategory">
          {category}
        </div>
        <div className="booktitle">
          {title}
        </div>

        <div className="remove-container">
          <span> Comments | </span>
          <button type="button" onClick={() => handleRemoveBook({ id, title, category })}>Remove |</button>
          <span> Edit </span>
        </div>
      </div>
      <div className="bookprogress">
        <div className="bookchaptercircle">

          {Math.floor(Math.random() * 100)}
          % Completed
        </div>
      </div>
      <div className="bookchapter">
        <span>Current Chapter</span>
        <span>
          Chapter
          {Math.floor(Math.random() * 10)}
        </span>
        <p>update progress</p>
        {' '}
      </div>
    </div>
  );
};

Books.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,

};
export default Books;
