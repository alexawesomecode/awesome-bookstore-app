import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '' };
  }


  render() {
    const { title, category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


    return (


      <div className="bookform">
        <h1>{category}</h1>
        <h2>{title}</h2>
        <form>
          <input type="text" id="formInput" />
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
export default BooksForm;
