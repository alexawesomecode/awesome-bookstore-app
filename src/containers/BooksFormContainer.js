import { connect } from 'react-redux';
<<<<<<< HEAD
import BooksForm from '../components/BooksForm';
=======
import BooksForm from './BooksForm';
>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66
import { CREATE_BOOK } from '../actions/index';

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(CREATE_BOOK(book)) });
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);
export default BooksFormContainer;
