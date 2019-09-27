export const createQuotation = (email) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('quotations').add({
            ...email,
            tipo: 'cotización',
            id: 'none',
            fecha: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_QUOTATION', email });
        }).catch((err) => {
            dispatch({ type: 'CREATE_QUOTATION_ERROR', err});
        })
        
    }
};