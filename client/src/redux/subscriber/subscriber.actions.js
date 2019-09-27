export const createSubscriber = (email) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('subscriptions').add({
            ...email,
            title: 'subscriber',
            id: 'none',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SUBSCRIBER', email });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SUBSCRIBER_ERROR', err});
        })
        
    }
};