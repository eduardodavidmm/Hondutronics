import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import Bubbles from '../bubbles/bubbles.component';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
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
                            <a href="#pricing"><CustomButton>Cotizar</CustomButton></a>
                            <CustomButton><Link to="/demo" className="text-white">Demo</Link></CustomButton>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5">
                    <img src={require('../../assets/casa2.svg')} alt="" className="hero-img img-fluid image" />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
