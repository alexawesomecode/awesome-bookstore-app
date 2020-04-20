const booksReducer = (state, action) => {

    switch (action.type) {
        case 'CREATE_BOOK':
            return Object.assign({}, state, action.book)
        case 'REMOVE_BOOK':
            let newState = {...state}
            delete newState.book.id
            return newState;
        default:
            return state
    }
}

export default booksReducer;