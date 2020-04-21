import React from 'react';

const Books = (props) => {

    const { id, title, category } = props;
    return (
        <tr className="bookitem">
            <td>
                {id}
             </td>
             <td>
                {title}
             </td>
             <td>
                {category}
             </td>
        </tr>
        
    )
}

export default Books;