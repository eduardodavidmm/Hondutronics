const initState = {
    emails: [
        {id: '1', email: 'davidmm@gmail.com'},
        {id: '2', email: 'davidmm@hotmail.com'}
    ]
}

const subscriberReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_SUBSCRIBER':
            console.log('subscribed', action.email);
            return state;
        case 'CREATE_SUBSCRIBER_ERROR':
            console.log('create subscriber error:', action.err);
            return state;
        default:
        return state;
    }
}

export default subscriberReducer