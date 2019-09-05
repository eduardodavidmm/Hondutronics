import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import { Link } from 'react-router-dom';
import './testimonials.styles.scss';

const Testimonials = () => (
    <div className="container testimonials" id="about">
        <section className="text-center my-5 p-1">

            <h2 className="h1-responsive font-weight-bold my-5">Conócenos</h2>

            <div className="row">

                <div className="col-lg-12 col-md-12">
                    <div className="testimonial card testimonial-card">
                        <div className="card-up info-color"></div>
                        <div className="avatar mx-auto white">
                            <img src={require("../../assets/Arturo.jpg")} alt="CEO Arturo Machado" className="rounded-circle img-fluid" />
                        </div>
                        <div className="card-body">
                            <h4 className="font-weight-bold mb-4">Arturo Machado - Hondutronics CEO</h4>
                            <hr />
                            <p className="dark-grey-text mt-4"><i className="fas fa-quote-left pr-2"></i> El caos inicial dentro de un emprendimiento es el desastre más hermoso que puedes
                          experimentar en tu vida  <i className="fas fa-quote-right pr-2"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <CustomButton><Link to="/aboutus" className="text-white">Sobre Nosotros</Link></CustomButton>
        </section>
    </div>
);

export default Testimonials;
