const filterReduce = (state, action) => {
    switch (action.type) {
    case 'ALL':
        return [...state, {state.filter: 'All'}]
    case 'Horror':
        return [...state, {state.filter: 'Horror'}]
    default:
        return [...state, {state.filter: 'All'}]
    }
}