import { connect } from 'react-redux';
import { BooksForm } from '../components/BooksForm'
import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/index'

const mapDispatchToProps = (dispatch) => ({

    createBook: (book) => dispatch(CREATE_BOOK(book)),
    removeBook: (book) => dispatch(REMOVE_BOOK(book))

})
const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)