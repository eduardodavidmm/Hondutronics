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
                                <li>$ 3.50</li>
                                <li>9.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 trad">
                        <h3 className="h3">Tradicional</h3>
                        <div>
                            <i className="fas fa-lightbulb fa-5x iconconv"></i>
                            <ul>
                                <li>$ 13.90</li>
                                <li>17.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
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
                                <li>$ 3.50</li>
                                <li>9.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3">Tradicional</h3>
                        <div>
                            <i className="fas fa-plug fa-5x iconconv"></i>
                            <ul>
                                <li>$ 3.50</li>
                                <li>9.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
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
                                <li>$ 3.50</li>
                                <li>9.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="h3">Tradicional</h3>
                        <div className="data">
                            <i className="fas fa-power-off fa-5x iconconv"></i>
                            <ul>
                                <li>$ 3.50</li>
                                <li>9.3 watts</li>
                                <li>tiempo transcurrido: 0</li>
                                <li>consto total: 0</li>
                            </ul>
                        </div>
                        <Switch/>
                    </div>
                </div>
            </div>
    </div>
);


export default Demo;
