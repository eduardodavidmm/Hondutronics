import React from 'react';
import Switch from '../../components/toggle-switch/toggle-switch.component';
import './demo.styles.scss';

const Demo = () => (
    <div className="container demo">
        <h1 className="title">Demo</h1>
        <p>Consulta datos reales de nuestros productos comparados a productos convencionales</p>
            <div className="container democont">
                    <div className="row">
                    <div className="col-md-6 smart">
                        <h3 className="h3">Smart</h3>
                        <div>
                            <i className="far fa-lightbulb fa-5x iconsmart"></i>
                            <ul>
                                <li>Watts: 8-13</li>
                                <li>Lumens: 840</li>
                                <li>Promedio de Duración (años): 18.6</li>
                                <li>Costo Anual Estimado: $46.65</li>
                                <li>Emisiones de CO2(KG/año): 205</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 trad">
                        <h3 className="h3">Tradicional</h3>
                        <div>
                            <i className="far fa-lightbulb fa-5x iconconv"></i>
                            <ul>
                                <li>Watts: 60</li>
                                <li>Lumens: 800</li>
                                <li>Promedio de Duración (años): 0.9</li>
                                <li>Costo Anual Estimado: $12.26</li>
                                <li>Emisiones de CO2(KG/año): 477</li>
                            </ul>
                        </div>
                        <Switch/>
                    </div>
                </div>
            </div>
            <div className="container democont">
                    <div className="row">
                    <div className="col-md-6">
                        <h3 className="h3">Smart</h3>
                        <div>
                            <i className="fas fa-plug fa-5x iconsmart"></i>
                            <ul>
                                <li>$</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3">Tradicional</h3>
                        <div>
                            <i className="fas fa-plug fa-5x iconconv"></i>
                            <ul>
                                <li>$</li>
                            </ul>
                        </div>
                        <Switch/>
                    </div>
                </div>
            </div>
            <div className="container democont">
                    <div className="row">
                    <div className="col-md-6">
                        <h3 className="h3">Smart</h3>
                        <div className="data">
                            <i className="fas fa-power-off fa-5x iconsmart"></i>
                            <ul>
                                <li>$</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3">Tradicional</h3>
                        <div className="data">
                            <i className="fas fa-power-off fa-5x iconconv"></i>
                            <ul>
                                <li>$</li>
                            </ul>
                        </div>
                        <Switch/>
                    </div>
                </div>
            </div>
    </div>
);


export default Demo;
