const booksReducer = (state, action) => {
  console.log(state, 'dfs', action.books)
  switch (action.type) {
    case 'CREATE_BOOK':
      return Object.assign({}, state, {books: [...state.books, action.books]});
    case 'REMOVE_BOOK':
      
      let books =  state.books.filter(elem => elem.id !== action.books.id)
      return Object.assign({}, state.filter, {books: books})

    case 'CHANGE_FILTER':
      return Object.assign({}, state, {filter: action.filter})
    default:
      return state;
  }
};

export default booksReducer;
