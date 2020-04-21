import React from 'react';
import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div className="App">
    <h1>Jello Mr Alex</h1>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
