export const addPurchase = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('purchase').add({
            ...data,
            tipo: 'compra',
            id: 'none',
            fecha: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PURCHASE', data });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PURCHASE_ERROR', err});
        })
        
    }
};