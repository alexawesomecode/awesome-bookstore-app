import React from 'react';

export class BookList extends React.Component {

    
    render() {
    
        const { books } = this.props;
        return (

            <div className="booklist">
                   <h1> { books.map(elem => ( elem.title )) } </h1>
                <table>
                    <tr>
                        <th>Book Id</th>
                        <th>Category</th>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lunas</td>
                        <td>Fiction</td>
                    </tr>
                </table>
            </div>

        )
    }
}

