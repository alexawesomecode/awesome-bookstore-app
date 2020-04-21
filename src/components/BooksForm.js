import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


  return (


    <div className="bookform">
      <form>
        <input type="text" />
        <select>
          {categories.map(elem => (
            <option key={elem}>
              {' '}
              {elem}
              {' '}
            </option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>


    </div>
  );
};
export default BooksForm;
