import React from 'react';
import './subscription.styles.scss';


const Subscription = () => (
    <div id="register" className="call-action-primary py-80 ">
        <div className="container ">
            <div className="row ">
                <div className="col-sm-12 ">
                    <div className="call-action-primary-content text-center ">
                        <h1 className="text-white mb-3 call-action-head ">¿Quieres estár pendiente de actualizaciones y nuevos productos?</h1>
                        <p className="text-white call-action-text ">Déjanos tu correo electrónico y te notificaremos de nuestros nuevos productos, servicios, eventos de centro de experiencia en vivo y boletines informativos</p>
                        <form className="mt-5 ">
                            <div className="input-group call-action-primary-search ">
                                <input className="form-control call-action-primary-input " placeholder="Correo " aria-label="Recipient 's username"
                                    aria-describedby="basic-addon2" type="text" />
                                <div className="input-group-append">
                                    <button type="submit" className="call-action-primary-btn ">Suscribirse</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Subscription;
