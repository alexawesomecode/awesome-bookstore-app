const booksReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      console.log(action)
      return state.filter(elem => elem.id !== action.book.id)
    default:
      return state;
  }
};

export default booksReducer;
