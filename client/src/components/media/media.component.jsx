import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import './media.styles.scss';

const Media = () => (
    <div className="bg-gray">
        <div className="container">
            <div className="call-action-media">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="media">
                            <div className="media-left">
                                <img src={require('../../assets/media.svg')} alt="img" className="img-fluid" width="90" />
                            </div>
                            <div className="media-body">
                                <h3 className="text-primary h3media">¿Quiéres vivir la experiencia de automatizar?</h3>
                                <p className="call-action-media-text textmedia">Regístrate y nosotros te haremos saber cuándo y dónde será nuestra
                                  próxima charla informativa o centro de experiencias.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="mt-4 button">
                            <a href="#register"><CustomButton>Registrarse</CustomButton></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Media;
