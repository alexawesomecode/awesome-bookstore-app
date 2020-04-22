import React from 'react';
import '../App.css';
import BooksListContainer from '../containers/BookListsContainer';
import BooksFormContainer from '../containers/BooksFormContainer';

const App = () => (
  <div className="App">
    <h1>Jello Mr Alex</h1>
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
