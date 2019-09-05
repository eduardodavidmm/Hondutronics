import React from 'react';
import PartnerOne from '../../assets/p1.png';
import PartnerTwo from '../../assets/p2.png';
import PartnerThree from '../../assets/p3.png';
import './partners.styles.scss';


const Partners = () => (
    <div className="py-80 partners">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="section-head text-center">
                        <h1 className="title">Asociados a las mejores marcas</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <ul className="partners-horiz-list clearfix justify-content-center">
                        <li className="partners-horiz-item">
                            <img src={PartnerOne} className="img-fluid partner-img" alt="partner" />
                        </li>
                        <li className="partners-horiz-item">
                            <img src={PartnerTwo} className="img-fluid partner-img" alt="partner" />
                        </li>
                        <li className="partners-horiz-item">
                            <img src={PartnerThree} className="img-fluid partner-img" alt="partner" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Partners;
