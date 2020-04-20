import React from 'react';
import './App.css';
import BookList from './components/BookList'
import BooksForm from './components/BooksForm'

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <h1>Jello</h1>
     <BookList></BookList> 
     <BooksForm></BooksForm>
    </div>
  );
  }
}

export default App;
