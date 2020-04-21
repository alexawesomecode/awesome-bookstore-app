import { createStore } from 'redux';
import  booksReducer from './reducers/books'

let bookStore = createStore(booksReducer, {books: [{}]})


export default bookStore;