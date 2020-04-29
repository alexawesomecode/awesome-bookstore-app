import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = props => {
  const {
    books, removeBook, addFilter, filter,
  } = props;

  const handleFilterChange = e => addFilter(e);

  return (
    <div>

      <CategoryFilter changeFilter={handleFilterChange} />

      <div className="booklist">

        { books.map(elem => {
          if (filter === 'All') {
            return (
              <Book
                key={elem.id}
                title={elem.title}
                category={elem.category}
                id={elem.id}
                handleRemoveBook={removeBook}
              />
            );
          }
          if (elem.category === filter) {
            return (
              <Book
                key={elem.id}
                title={elem.title}
                category={elem.category}
                id={elem.id}
                handleRemoveBook={removeBook}
              />
            );
          }
          return undefined;
        })}
      </div>

    </div>

  );
};

BookList.propTypes = {

  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,

};


export default BookList;
