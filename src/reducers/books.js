let firstState = {books: [
  {id: Math.floor(Math.random() * 1000), title:'Pelos', category:'Horror'},
  {id: Math.floor(Math.random() * 1000), title:'Sofias World', category:'Novel'},
  {id: Math.floor(Math.random() * 1000), title:'Homo Deus', category:'Essay'},
  {id: Math.floor(Math.random() * 1000), title:'Tristam Shandy', category:'Novel'},
  {id: Math.floor(Math.random() * 1000), title:'Don Quijote', category:'Adventure'},


]}

const booksReducer = (state, action) => {

    switch (action.type) {
        case 'CREATE_BOOK':
            let newState =  Object.assign({}, state, 
              { books: [...firstState.books, {id: action.id, title: action.title, category: action.category}] } );
              console.log(newState)
              return newState;
        case 'REMOVE_BOOK':
            return state
        default:
            return state
    }
    
}


export default booksReducer;