import React from 'react';
import './App.css';
import BooksList from './containers/BooksList'
import BooksForm from './components/BooksForm'

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <h1>Jello</h1>
     <BooksList></BooksList> 
     <BooksForm></BooksForm>
    </div>
  );
  }
}

export default App;
