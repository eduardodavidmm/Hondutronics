const INITIAL_STATE = {
    sections: [
        {
            title: 'Smart',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            id: 1,
            linkUrl: 'shop/smart'
        },
        {
            title: 'Seguridad',
            image: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 2,
            linkUrl: 'shop/seguridad'
        },
        {
            title: 'Ahorro',
            image: 'https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 3,
            linkUrl: 'shop/ahorro'
        },
        {
            title: 'Paquetes Personalizados',
            image: 'https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80',
            size: 'large',
            id: 4,
            linkUrl: 'shop/paquetespersonalizados'
        },
        {
            title: 'Promociones',
            image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            size: 'large',
            id: 5
            ,
            linkUrl: 'shop/promo'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
