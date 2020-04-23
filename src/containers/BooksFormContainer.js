import { connect } from 'react-redux';
import BooksForm from './BooksForm';

import { CREATE_BOOK } from '../actions/index';

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(CREATE_BOOK(book)) });
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);
export default BooksFormContainer;
