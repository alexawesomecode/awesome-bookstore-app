import { connect } from 'react-redux';
import BookList from './BookList';
import {REMOVE_BOOK} from '../actions/index';
import {CHANGE_FILTER} from '../actions/index';


const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => {
  
  return { 
    removeBook: (book) => dispatch(REMOVE_BOOK(book)),
    addFilter: (filter) => dispatch(CHANGE_FILTER(filter))

  }


}
const BookListsContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default BookListsContainer;
