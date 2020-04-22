import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = props => {
  const { books, removeBook } = props;

  return (

    <div className="booklist">

      <table>

        <tbody>

          <tr>
            <th>Book Id</th>
            <th>Category</th>
            <th>Title</th>
            <th>Remove Book</th>

          </tr>
          { books.map(elem => (
            <Book
              key={elem.id}
              title={elem.title}
              category={elem.category}
              id={elem.id}
              handleRemoveBook={removeBook}
            />
          ))}
        </tbody>

      </table>
    </div>

  );
};

BookList.propTypes = {

  books: PropTypes.arrayOf(PropTypes.object).isRequired,

};


export default BookList;
