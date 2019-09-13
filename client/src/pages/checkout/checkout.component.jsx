import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CustomButton from '../../components/custom-button/custom-button-component';
import swal from 'sweetalert2';
import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => {

  const swalfunction = () => {
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Nuestros Productos',
        html:
          '<p>Recuerda que también puedes comprar paquetes personalizados.</p>'
      }, {
        title: 'Compra',
        html:
          'Nombre: <input id="swal-input1.2" placeholder="Walther" class="swal2-input">' +
          'Correo: <input id="swal-input2.2" placeholder="walther@hondutronics.com" class="swal2-input">' +
          'Numero de Celular: <input id="swal-input3.2" placeholder="99668899" class="swal2-input">' +
          '<p>Se te contactará con la mayor brevedad posible para brindarte atención personalizada.</p>'
      }
    ]).then((result) => {
      if (result.value) {
        swal.fire({
          type: 'success',
          title: '¡Compra Realizada!',
          text: 'Espera nuestro contacto para confirmar la compra',
          confirmButtonText: 'Finalizar'
        })
      }
    })
  }

  return (
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
      <CustomButton onClick={swalfunction} >Comprar</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
