import { combineReducers } from 'redux';
import filterReducer from './filter';
import booksReducer from './books';

const storeReducer = combineReducers({

  books: booksReducer,
  filter: filterReducer,
});

export default storeReducer;
