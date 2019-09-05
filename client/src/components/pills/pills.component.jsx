import React from 'react';
import './pills.styles.scss';


const Pills = () => (
    <div className="bg-gray py-80" id="info">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="section-head text-center">
                        <h1 className="title">¿Por qué automatizar?</h1>
                        <p className="desc">La automatización te permite monitorear de forma inteligente tu espacio personal, 
                        ya sea casa, apartamento u oficina.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ul className="nav nav-pills material-pills nav-border-tabs nav-fill" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="cs-pills-one-tab" data-toggle="pill" href="#cs-pills-one" role="tab"
                                aria-controls="cs-pills-one" aria-selected="true">Controla tu
                                <br /> casa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="cs-pills-two-tab" data-toggle="pill" href="#cs-pills-two" role="tab"
                                aria-controls="cs-pills-two" aria-selected="false">Accede a tu casa o negocio
                                <br /> desde cualquier lado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="cs-pills-three-tab" data-toggle="pill" href="#cs-pills-three" role="tab"
                                aria-controls="cs-pills-three" aria-selected="false">Aplicativos móviles
                                <br /> versátiles</a>
                        </li>
                    </ul>
                    <div className="tab-content mt-5" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="cs-pills-one" role="tabpanel" aria-labelledby="cs-pills-one-tab">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <div className="material-pills-text r-text">
                                        <h4 className="info">Controla tu casa</h4>
                                        <p>Maneja desde tu celular la iluminación, los electrodomésticos, cámaras de seguridad, el aire
                                          acondicionados e incluso la puerta del garaje, todo a un toque de distancia.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <img src={require("../../assets/Recurso3.png")} className="img-fluid aos-init primerimagen" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="cs-pills-two" role="tabpanel" aria-labelledby="cs-pills-two-tab">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={require("../../assets/Recurso2.png")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <div className="material-pills-text">
                                        <h4 className="info">Accede a tu casa o negocio desde cualquier lado</h4>
                                        <p>Monitorea el uso de tus aparatos inteligentes desde tu oficina, desde la casa de tu mejor amigo
                                          o incluso
                                          desde la playa de Miami donde estás pasando tus vacaciones. Configura horarios, apaga o enciende,
                                          y ejecuta escenas personalizadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="cs-pills-three" role="tabpanel" aria-labelledby="cs-pills-three-tab">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <img src={require("../../assets/insteon.png")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="material-pills-text">
                                        <h4 className="info">Aplicativos móviles versátiles</h4>
                                        <p>Administra tu casa inteligente desde cualquier dispositivo móvil, a través de aplicativos
                                          amigables y
                                          sencillos de utilizar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Pills;
