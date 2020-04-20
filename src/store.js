import { createStore } from 'redux';
import  booksReducer from './reducers/books'

const firstState = [{id: 2, title:'s'}]
const bookStore = createStore(booksReducer, {books: firstState})


export default bookStore;