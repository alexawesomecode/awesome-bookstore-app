import { connect } from 'react-redux';
import BookList from './BookList';
import { REMOVE_BOOK } from '../actions/index';

const mapStateToProps = state => ({ books: state });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(REMOVE_BOOK(book)) });
const BookListsContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default BookListsContainer;
