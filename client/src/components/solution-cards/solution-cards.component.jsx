import React from 'react';
import './solution-cards.styles.scss';

const SolutionCards = () => (
    <div className="solution">
        <div className="cont">
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                       <h3>Seguridad</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Los productos inteligentes pueden representar una herramienta para reforzar la seguridad de los clientes en sus espacios a través de herramientas de alarma y monitoreo.</p>
                    </div>
                </div>
            </div>
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                        <h3>Costos</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Actualmente nuestro mercado cuenta con uno de los costos más elevados de energía, por lo cual creamos una herramienta que permite al cliente acceder a planes personalizados de ahorro, alimentados por tecnología inteligente.</p>
                    </div>
                </div>
            </div>
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                        <h3>Comodidad</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>El mundo en el que vivimos exige cada vez más que la interacción con nuestro entorno sea fácil y que atienda de manera inmediata nuestras necesidades.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SolutionCards;