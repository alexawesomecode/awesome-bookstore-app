export const REMOVE_BOOK = (book) =>  ({type: 'REMOVE_BOOK', book})
export const CREATE_BOOK = (book) => {
 console.log(book)
 return  {type: 'CREATE_BOOK', id: book.id, title: book.title, category: book.category}
    
}