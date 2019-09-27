const initState = {
    emails: [
        {id: 'none', email: 'davidmm@gmail.com'},
        {id: 'none', email: 'davidmm@hotmail.com'}
    ]
}

const quotationReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_QUOTATION':
            console.log('Send', action.email);
            return state;
        case 'CREATE_QUOTATION_ERROR':
            console.log('Error:', action.err);
            return state;
        default:
        return state;
    }
}

export default quotationReducer