import { connect } from 'react-redux';
import BookList from './BookList';


const mapStateToProps = state => ({ books: state });

const BookListsContainer = connect(mapStateToProps, null)(BookList);
export default BookListsContainer;
