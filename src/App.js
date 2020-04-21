import React from 'react';
import './App.css';
import BooksListContainer from './containers/BooksList'
import BooksForms from './containers/BooksForms'

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <h1>Jello</h1>
     <BooksListContainer></BooksListContainer> 
     <BooksForms></BooksForms>
     
    </div>
  );
  }
}

export default App;
