import React from 'react';
import './footer.styles.scss';

const Footer = () => (
    <footer>
        <div className="container" id="footer">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Hondutronics</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#pricing">Paquetes</a>
                        </li>
                        <li>
                            <a href="#footer">Terminos y Condiciones</a>
                        </li>
                        <li>
                            <a href="#footer">Politica de Privacidad</a>
                        </li>
                        <li>
                            <a href="#register">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Empresa</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#about">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#info">Preguntas Frecuentes</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Contactanos</h4>
                    <ul className="footer-links">
                        <li>
                            <a title="Link" href="#hondutronics">hondutronics.sac@gmail.com</a>
                        </li>
                        <li>
                            <a title="Link" href="#hondutronics">www.hondutronics.com</a>
                        </li>
                    </ul>
                    <h4 className="footer-head">Siguenos</h4>
                    <ul className="footer-share-it">
                        <li className="shate-it-item">
                            <a href="https://es-la.facebook.com/Hondutronics/" target="_blank" rel="noopener noreferrer" className="btn btn-share-sm bg-facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="shate-it-item">
                            <a href="https://es-la.facebook.com/Hondutronics/" target="_blank" rel="noopener noreferrer" className="btn btn-share-sm bg-twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="shate-it-item">
                            <a href="https://www.instagram.com/hondutronics/?hl=es-la" target="_blank" rel="noopener noreferrer" className="btn btn-share-sm bg-instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-bar clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mt-0 mb-0 text-primary">Hondutronics</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="copy-text">© 2019 Hondutronics. Todos los derechos reservados.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;
