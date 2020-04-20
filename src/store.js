import { createStore } from 'redux';
import  booksReducer from './reducers/books'

const firstState = [
    {id: Math.floor(Math.random() * 1000), title:'Pelos', category:'Horror'},
    {id: Math.floor(Math.random() * 1000), title:'Sofias World', category:'Novel'},
    {id: Math.floor(Math.random() * 1000), title:'Homo Deus', category:'Essay'},
    {id: Math.floor(Math.random() * 1000), title:'Tristam Shandy', category:'Novel'},
    {id: Math.floor(Math.random() * 1000), title:'Don Quijote', category:'Adventure'},


]
const bookStore = createStore(booksReducer, {books: firstState})


export default bookStore;