import React from 'react';
import PropTypes from 'prop-types';


class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input:''}
    }

    
    render() {
    
        return (

            <div className="booklist">
                   
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

export default BookList