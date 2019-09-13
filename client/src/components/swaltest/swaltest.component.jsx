import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button-component';
import swal from 'sweetalert2';

export default class Header extends Component {
    swalfunction() {
        swal.mixin({
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
        }).queue([
            {
                title: 'Nuestros Productos',
                html:
                    '<p>Recuerda que también puedes comprar productos de forma individual.</p>'
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
    render() {
        return (
            <div className="container">
                <CustomButton onClick={this.swalfunction}>Swal</CustomButton>
            </div>
        )
    }
}