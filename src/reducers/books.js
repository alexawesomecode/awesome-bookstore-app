const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.books];
    case 'REMOVE_BOOK':
      return state.filter(elem => elem.id !== action.books.id);
    default:
      return state;
  }
};

export default booksReducer;
