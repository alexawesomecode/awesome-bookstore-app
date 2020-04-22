import React from 'react';
import PropTypes from 'prop-types';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    const input = e.target.value;
    if (e.target.id === 'formInput') this.setState({ title: input });
    if (e.target.id === 'formSelect') this.setState({ category: input });
  }

  handleSubmit(e) {
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

  render() {
    const { title, category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


    return (


      <div className="bookform">
        <h1>{category}</h1>
        <h2>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="formInput" onChange={this.handleChange} value={title} />
          <select id="formSelect">
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

BooksForm.propTypes = {

  createBook: PropTypes.func.isRequired,
};

export default BooksForm;
