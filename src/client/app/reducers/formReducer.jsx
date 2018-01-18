function weather(state = {}, action) {
    switch(action.type) {
        case 'FORM_DATA_FETCHED':
            return action.result;
        default:
            return state;
    }
}

export default weather;
