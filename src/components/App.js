import React from 'react';
import '../App.css';
import BooksListContainer from '../containers/BookListsContainer';
import BooksForm from './BooksForm';

const App = () => (
  <div className="App">
    <h1>Jello Mr Alex</h1>
    <BooksListContainer />
    <BooksForm />
  </div>
);

export default App;
