import React from 'react';
import './App.css';
import BooksList from './containers/BooksList'
import BooksForms from './containers/BooksForms'

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <h1>Jello</h1>
     <BooksList></BooksList> 
     <BooksForms></BooksForms>
     
    </div>
  );
  }
}

export default App;
