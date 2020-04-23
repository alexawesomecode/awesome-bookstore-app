import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD:src/components/BooksForm.js
=======

>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

<<<<<<< HEAD:src/components/BooksForm.js
=======

>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js
  handleChange(e) {
    const input = e.target.value;
    if (e.target.id === 'formInput') this.setState({ title: input });
    if (e.target.id === 'formSelect') this.setState({ category: input });
  }

  handleSubmit(e) {
<<<<<<< HEAD:src/components/BooksForm.js
    const randomNum = Math.floor(Math.random() * 1000);
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ id: randomNum, title, category });
    this.setState({ title: '', category });
    e.preventDefault();
  }

=======
    const { title, category } = this.state;
    const { createBook } = this.props;
    const randomNum = Math.floor(Math.random() * 1000);
    createBook(
      {
        id: randomNum,
        title,
        category,
      },
    );
    this.setState({ title: '', category: 'Action' });
    e.preventDefault();
  }


>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js
  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    return (


      <div className="bookform">
<<<<<<< HEAD:src/components/BooksForm.js
=======
        <h1>{category}</h1>
        <h2>{title}</h2>
>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js

        <form onSubmit={this.handleSubmit}>
          <input type="text" id="formInput" onChange={this.handleChange} value={title} />
          <select id="formSelect" onChange={this.handleChange}>
            {categories.map(elem => (
              <option key={elem}>

                {elem}

              </option>
            ))}
          </select>
          <input type="submit" value="submit" />
        </form>


      </div>
    );
  }
}

<<<<<<< HEAD:src/components/BooksForm.js
=======

>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js
BooksForm.propTypes = {

  createBook: PropTypes.func.isRequired,
};
<<<<<<< HEAD:src/components/BooksForm.js
=======

>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66:src/containers/BooksForm.js
export default BooksForm;
