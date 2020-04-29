import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const { changeFilter } = props;
  const handleSubmit = e => {
    const input = e.target.value;
    changeFilter(input);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2> Bookstore CMS </h2>
        <p>BOOKS</p>
        <p>CATEGORIES</p>
      </div>

      <div className="categoryfilter">
        <select onChange={handleSubmit}>
          <option> All </option>
          <option> Horror </option>
          <option> Action </option>
          <option>Novel</option>
          <option>Adventure</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>History</option>
          <option>Biography</option>
          <option>Sci-Fi</option>

        </select>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};


export default CategoryFilter;
