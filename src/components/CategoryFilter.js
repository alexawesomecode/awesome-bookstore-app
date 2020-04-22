import React from 'react';
const CategoryFilter = (props) => {
    const { changeFilter } = props
    const handleSubmit = (e) => {
        
        let input = e.target.value;
        changeFilter(input)   
    }
    return (

        <div className="categoryfilter">
            <select onChange={handleSubmit}>
                <option> All </option>
                <option> Horror </option>
                <option> Action </option>
                <option>Novel</option>
                <option>Adventure</option>

            </select>
        </div>
    )
}

export default CategoryFilter;