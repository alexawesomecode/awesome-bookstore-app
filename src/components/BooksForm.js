import React from 'react';

export class BooksForm extends React.Component {


    constructor(props) {

        super(props);
        this.state = {title: '', category: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {

        let input = e.target.value
        if (e.target.id === 'formInput') this.setState({title: input})
        if (e.target.id === 'formSelect') this.setState({category: input})
        console.log(e.target.id)

    }

    handleSubmit(e) {

        e.preventDefault()
        let id = Math.floor(Math.random() * 1000)
        let stateTitle = this.state.title
        let stateCategory = this.state.category
        this.props.createBook({title: stateTitle, category: stateCategory, id:id})

    }
 
    render() {

    const { title, category } = this.state
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

    
    return (
        
        
        <div className="bookform" >
            <h1>{this.state.category}</h1>
            <form>
            <input type="text" id="formInput" onChange={this.handleChange} value={title} /> 
            <select onChange={this.handleChange} id="formSelect">
        {categories.map(elem => {

            return <option> {elem} </option>


        })}
            </select>
            <input type="submit" value="submit"/>
            </form>
            

        </div>
    )
    }
}
