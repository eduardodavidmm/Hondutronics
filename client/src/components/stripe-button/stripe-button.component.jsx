import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_bWXzMRnIJUSUNrfbkghb2bBd00YwugMeJm';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Compra Realizada');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('Tu compra no ha sido realizada. Asegúrate de introducir correctamente tus datos');
        });
    };

    return (
        <StripeCheckout
            label='Pagar'
            name='Hondutronics Shop'
            billingAddress
            shippingAddress
            description={`Tu pago total es: $${price} `}
            amount={priceForStripe}
            panelLabel='Pagar'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
