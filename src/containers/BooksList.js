import { connect } from 'react-redux';
import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/index'
import React from 'react';
import Book from '../components/Book'

const BookList = (props) => {
          
        let { books } = props;
        
        console.log(props)
        return (

            <div className="booklist">
                <table>
                  
                    <tbody>
                    <tr>
                        <th>Book Id</th>
                        <th>Category</th>
                        <th>Title</th>
                    </tr>
                    {books.map((elem,i) => {
                        
                        return <Book key={i} title={elem.title} category={elem.category} id={elem.id} />

                    })}
                    </tbody>
                </table>
            </div>

        )
    
}


const mapStateToProps = (state) => ({books: state.books})
const mapDispatchToProps = (dispatch) => ({

    createBook: (book) => dispatch(CREATE_BOOK(book)),
    removeBook: (book) => dispatch(REMOVE_BOOK(book))

})

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList)

export default BooksListContainer;