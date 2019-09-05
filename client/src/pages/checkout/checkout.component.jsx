import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <h2 className='title'>Carrito de Compras</h2>
    <div className='checkout-header'>
      <div className='header-block product'>
        <span>Producto</span>
      </div>
      <div className='header-block'>
        <span>Descripción</span>
      </div>
      <div className='header-block'>
        <span>Cantidad</span>
      </div>
      <div className='header-block'>
        <span>Precio</span>
      </div>
      <div className='header-block'>
        <span>Eliminar</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>Total: ${total}</div>
    <div className="test-warning">
      *Usar el siguiente numero de tarjeta para prueba de pago*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
