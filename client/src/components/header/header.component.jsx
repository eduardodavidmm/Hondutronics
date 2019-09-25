import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import Bubbles from '../bubbles/bubbles.component';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import swal from 'sweetalert2';

const Header = () => {

    const swalfunction = () => {
        swal.mixin({
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Nuestros Productos',
                html:
                    '<p>Recuerda que también puedes comprar productos de forma individual y paquetes personalizados en la tienda virtual.</p>'
            }, {
                title: 'Cotización',
                html:
                    'Nombre: <input id="swal-input1.2" placeholder="Walther" class="swal2-input">' +
                    'Correo: <input id="swal-input2.2" placeholder="walther@hondutronics.com" class="swal2-input">' +
                    'Numero de Celular: <input id="swal-input3.2" placeholder="99668899" class="swal2-input">' +
                    '<p>Se te contactará con la mayor brevedad posible para brindarte atención personalizada.</p>'
            }, {
                title: 'Solución de Problemas',
                text: 'Nos caracterizamos por solucionar tus problemas de forma personalizada. Cuéntanos, ¿Hay algún problema en el que te podríamos ayudar?',
                input: 'textarea',
                inputPlaceholder: 'Ejemplo: Quiero que las luces de mi casa se enciendan y apaguen automáticamente',

            }
        ]).then((result) => {
            if (result.value) {
                swal.fire({
                    type: 'success',
                    title: '¡Cotización en Proceso!',
                    text: 'Espera nuestro contacto para procesar tu solicitud',
                    confirmButtonText: 'Finalizar'
                })
            }
        })
    }


    return (
        <header className="header fixed-top-added" id="hondutronics">
            <div className="container">
                <div className="row">
                    <Bubbles />
                    <div className="col-sm-6 col-md-7">
                        <div className="hero-content">
                            <h1 className="title">La casa inteligente a tu alcance</h1>
                            <p className="parragraph mt-3"> La automatización de tu espacio al alcance de tu mano. Ofrecemos paquetes de
                              servicios personalizados y ajustados
                              a tus gustos y necesidades.
                                </p>
                            <div className="pair-btns-list">
                                <CustomButton onClick={swalfunction}>Cotizar</CustomButton>
                                <Link to="/demo" className="text-white"><CustomButton>Demo</CustomButton></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                        <img src={require('../../assets/casa2.svg')} alt="" className="hero-img img-fluid image" />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
