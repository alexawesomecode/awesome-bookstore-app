import { connect } from 'react-redux';
import BooksForm from '../components/BooksForm';
import { CREATE_BOOK } from '../actions/index'

const mapDispatchToProps = (dispatch) => {

    return {createBook: (book) => dispatch(CREATE_BOOK(book))}

}
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm)
export default BooksFormContainer;

