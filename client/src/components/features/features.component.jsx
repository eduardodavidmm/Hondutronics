import React from 'react';
import { ReactComponent as Icon1 } from '../../assets/icn1.svg';
import { ReactComponent as Icon2 } from '../../assets/icn2.svg';
import { ReactComponent as Icon3 } from '../../assets/icn3.svg';
import { ReactComponent as Icon4 } from '../../assets/icn4.svg';
import { ReactComponent as Icon5 } from '../../assets/icn5.svg';
import { ReactComponent as Icon6 } from '../../assets/icn6.svg';
import './features.styles.scss';

const Features = () => (
    <div className="features" id="features">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="section-head text-center">
                        <h1>Beneficios</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon1 className="image" />
                        <h4>Fácil monitoreo</h4>
                        <p>De una forma sencilla, rápida y desde la palma de tu mano, puedes llevar el control de todos los
                        aparatos inteligentes de tu casa o negocio.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon2 className="image" />
                        <h4>Servicio personalizado</h4>
                        <p>Tú eliges que automatizar; desde una lámpara, hasta una automatización total. Proveemos todo el
                    servicio de instalación y configuración.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon3 className="image" />
                        <h4>Seguridad</h4>
                        <p>Desde cámaras de video hasta sensores de movimiento inteligentes, tu espacio será un lugar más
                    seguro con nuestros productos y servicios</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon4 className="image" />
                        <h4>Eleva tu comodidad</h4>
                        <p>Nunca dejarás tu lámpara o tu plancha encendida. Maneja tu espacio desde cualquier lado del
                    mundo a solo un toque de distancia.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon5 className="image" />
                        <h4>Simulador de energía</h4>
                        <p>Consulta, de forma real e inmediata, el consumo energético de todos tus productos inteligentes en
                    comparación con aparatos tradicionales</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cs-infobox-left mt-4 aos-init">
                        <Icon6 className="image" />
                        <h4>Ahorro</h4>
                        <p>¿Te imaginas reducir en un 30% tu gasto de energía eléctrica? Con nuestros paquetes de
                    productos puedes lograrlo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Features;
