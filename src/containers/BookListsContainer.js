import { connect } from 'react-redux';
import BookList from './BookList';
<<<<<<< HEAD
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';


const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  addFilter: filter => dispatch(CHANGE_FILTER(filter)),

});
=======
import { REMOVE_BOOK } from '../actions/index';

const mapStateToProps = state => ({ books: state });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(REMOVE_BOOK(book)) });
>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66
const BookListsContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default BookListsContainer;
