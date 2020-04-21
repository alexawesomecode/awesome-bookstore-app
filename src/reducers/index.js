export const REMOVE_BOOK = (book) =>  ({type: 'REMOVE_BOOK', id: book.id, title: book.title, category: book.category})
export const CREATE_BOOK = (book) => ({type: 'CREATE_BOOK', book})