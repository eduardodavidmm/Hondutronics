import React from 'react';
import Bubbles from '../../components/bubbles/bubbles.component';
import Switch from '../../components/toggle-switch/toggle-switch.component';
import './demo.styles.scss';
import Zoom from 'react-reveal/Zoom';

const Demo = () => (
    <div className="container demo">
        <Bubbles></Bubbles>
        <h1 className="title">Demo</h1>
        <p>Consulta datos reales de nuestros productos comparados a productos convencionales</p>
        <Zoom>
        <div className="row">
            <div className="col-md-6">
                <h3>Smart</h3>
                <div className="card">
                    <i className="far fa-lightbulb fa-5x iconsmart"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-plug fa-5x iconsmart"></i>
                    <Switch/>
                    <p className="info">data</p>
                </div>
                <div className="card">
                    <i className="fas fa-power-off fa-5x iconsmart"></i>
                    <Switch/>
                    <p>data</p>
                </div>
            </div>
            <div className="col-md-6">
                <h3>Tradicional</h3>
                <div className="card">
                    <i className="fas fa-lightbulb fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-plug fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-power-off fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
            </div>
        </div>
        </Zoom>
    </div>
);


export default Demo;
