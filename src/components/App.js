import React from 'react';
import '../App.css';
import BooksListContainer from '../containers/BookListsContainer';
import BooksFormContainer from '../containers/BooksFormContainer';

const App = () => (
  <div className="App">

    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
