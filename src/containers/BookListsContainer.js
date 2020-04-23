import { connect } from 'react-redux';
import BookList from './BookList';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';


const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  addFilter: filter => dispatch(CHANGE_FILTER(filter)),

});

console.log(mapStateToProps)
const BookListsContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default BookListsContainer;
