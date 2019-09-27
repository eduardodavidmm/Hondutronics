const initState = {
    emails: [
        {id: 'none', name:'David M.', email: 'davidmm@gmail.com', phone: '33333333', quote:'Automatizar casa'},
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