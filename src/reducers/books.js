const booksReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':

      return state;
    default:
      return state;
  }
};

export default booksReducer;
