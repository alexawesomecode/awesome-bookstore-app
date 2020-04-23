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

    <div className="booklist">
      <CategoryFilter changeFilter={handleFilterChange} />
      <table>

        <tbody>

          <tr>
            <th>Book Id</th>
            <th>Category</th>
            <th>Title</th>
            <th>Remove Book</th>

          </tr>
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
        </tbody>

      </table>
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
