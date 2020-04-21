import React from 'react';
import Book from './Book'

export class BookList extends React.Component {

    
    render() {
    
        const { books } = this.props;
        console.log(books)
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
}

