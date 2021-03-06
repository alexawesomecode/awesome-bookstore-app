import { createStore } from 'redux';
import storeReducer from './reducers/index';

const firstState = [
  { id: Math.floor(Math.random() * 1000), title: 'Pelos', category: 'Horror' },
  { id: Math.floor(Math.random() * 1000), title: 'Sofias World', category: 'Novel' },
  { id: Math.floor(Math.random() * 1000), title: 'Homo Deus', category: 'Essay' },
  { id: Math.floor(Math.random() * 1000), title: 'Tristam Shandy', category: 'Novel' },
  { id: Math.floor(Math.random() * 1000), title: 'Don Quijote', category: 'Adventure' },


];
const bookStore = createStore(storeReducer, { books: firstState, filter: 'All' });


export default bookStore;
