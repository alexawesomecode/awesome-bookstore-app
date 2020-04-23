const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.books];
    case 'REMOVE_BOOK':
<<<<<<< HEAD
      return state.filter(elem => elem.id !== action.books.id);
=======
      return state.filter(elem => elem.id !== action.book.id);
>>>>>>> 6c1419ebc50d03aee21dd72a3efa15e020deea66
    default:
      return state;
  }
};

export default booksReducer;
