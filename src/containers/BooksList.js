import { connect } from 'react-redux';
import BookList from './BookList';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({

  createBook: book => dispatch(CREATE_BOOK(book)),
  removeBook: book => dispatch(REMOVE_BOOK(book)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
