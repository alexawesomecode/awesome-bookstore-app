import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';

const firstState = [
  { id: Math.floor(Math.random() * 1000), title: 'Pelos II', category: 'Horror' },
  { id: Math.floor(Math.random() * 1000), title: 'Sofias World', category: 'Novel' },
  { id: Math.floor(Math.random() * 1000), title: 'Homo Deus', category: 'Essay' },
  { id: Math.floor(Math.random() * 1000), title: 'Tristam Shandy', category: 'Novel' },
  { id: Math.floor(Math.random() * 1000), title: 'Don Quijote', category: 'Adventure' },


];

const bookStore = createStore(booksReducer, firstState);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
