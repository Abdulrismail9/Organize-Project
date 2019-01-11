const interested = (state = [], action) => {
    switch(action.type) {
        case 'SET_INTEREST':
            return action.payload
        default:
            return state
    }
}

export default interested;