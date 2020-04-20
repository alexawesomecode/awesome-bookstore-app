import React from 'react';

export const BooksForm = () => {

    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

    
    return (
        
        
        <div className="bookform">
            <form>
            <input type="text" /> 
            <select>
                <option>default</option>
            </select>
            <input type="submit" value="submit"/>
            </form>
            

        </div>
    )

}