import React from 'react';
import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import campo3 from '../../images/campo3.jpg';
import campo4 from '../../images/campo4.jpg';
import campo5 from '../../images/campo5.jpg';
import campo6 from '../../images/campo6.jpg';
import azada from '../../images/scythe.png';
import siembra2 from '../../images/siembra2.png';
import siembra from '../../images/siembra.png';
import granja from '../../images/granja.png';
import ecologia from '../../images/ecologia.png';

function LandingPage() {
    return (
        <div className="LandingPage">
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
                <div className="container px-5">
                    <a className="navbar-brand py-0" href="#page-top"><img src={azada} alt="azada" style={{ height: '2em', weight: '2em' }} /></a>
                    <h4 className="fw-bold">Malocas</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link me-lg-3">Inicio</Link>
                                </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link me-lg-3">Servicios</Link>
                                </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link me-lg-3">Información</Link>
                                </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link me-lg-3">Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" role="button" className="btn btn-success me-lg-3">Ingresar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead py-4">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h5> Bienvenidos a Agricola Las Malocas Ltda </h5>
                                <h1 className="display-1 lh-1 mb-3 fw-bold" style={{ color: '#034303' }}>Calidad para tus cultivos</h1>
                                <p className="lead fw-normal text-muted mb-5">Realización de toda clase de actividades agropecuarias y/o agroindustriales en terrenos propios o ajenos.</p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <Link to="/login" role="button" className="btn btn-success me-lg-3 mb-4 mb-lg-0" >Ingresar a Malocas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-sm-none d-none d-md-block">
                            <img src={campo6} alt="" style={{ height: '25rem', width: '25rem', borderRadius: '18px' }}></img>
                        </div>
                    </div>
                </div>
            </header>
            <div className="text-center bg-success py-4 my-5">
                <div className="container-fluid px-5 pt-0">
                    <div className="row gx-6 justify-content-center">
                        <div className="col-xl-8">
                            <p className="fs-4 text text-white mb-4">"La web de Agricola Las Malocas Ltda está clasificada para brindar a través de un sistema la información de la siembra y recolección de cultivos."</p>
                            <Link to="/signup" role="button" className="btn btn-success btn-lg mb-4 mb-lg-0 w-auto">Registrarse</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-5 py-4 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <img src={siembra2} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Lorem</h3>
                                        <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <img src={granja} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Lorem</h3>
                                        <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="text-center">
                                        <img src={siembra} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Lorem</h3>
                                        <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center">
                                        <img src={ecologia} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Lorem</h3>
                                        <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0 d-sm-none d-none d-md-block">
                        <img src={campo3} alt="" style={{ height: '25rem', width: '25rem', borderRadius: '18px' }}></img>
                    </div>
                </div>
            </div>
            <div className="bg-success py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <p className="fs-2 fw-bold lh-1 text-white mb-4">Malocas Ltda</p>
                            <p className="lead fw-normal text-white mb-5 mb-lg-0">This section is perfect for featuring some
                                information about your application, why it was built, the problem it solves, or anything else!
                                There's plenty of space for text here, so don't worry about writing too much.</p>
                        </div>
                        <div className="col-sm-8 col-md-6 d-sm-none d-none d-md-block">
                            <img className="img-fluid rounded-circle"
                                src={campo4} alt="..." style={{ height: '25rem', width: '25rem', borderRadius: '18px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-sm-none d-none d-md-block">
                <img src={campo5} alt="" style={{ height: '90vh', width: '100%' }} />
            </div>
            <footer className="bg-white pt-4 pb-3">
                <div className="container px-4 py-2">
                    <div className="row gx-1 fs-5 py-2">
                        <div className="col">
                            <div className=""><b>Contacto </b></div>
                            <ul className="list-group fs-6">
                                <li className="list-group-item border-white">Palmira, Valle</li>
                                <li className="list-group-item border-white">(2)2752727</li>
                                <li className="list-group-item border-white">Agricola Las Malocas Ltda</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className=""><b>Recursos </b></div>
                            <ul className="list-group fs-6">
                                <li className="list-group-item border-white">Inicio</li>
                                <li className="list-group-item border-white">Servicios</li>
                                <li className="list-group-item border-white">Información</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className=""><b> Ingresos </b></div>
                            <ul className="list-group fs-6">
                                <li className="list-group-item border-white"><Link to="/login" className="text-decoration-none text-dark">Inicio de sesión</Link></li>
                                

                                <li className="list-group-item border-white"><Link to="/signup" className="text-decoration-none text-dark">Registro</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className=""><b>Agricola Las Malocas Ltda </b></div>
                            <ul className="list-group fs-6">
                                <li className="list-group-item border-white">Km 7 via Palmira - Cerrito en la ciudad de Palmira</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container px-4 py-2">
                    <div className="row">
                        <div className="col fs-3">
                            <b>Malocas</b>
                        </div>
                        <div className="col text-end text-muted">
                            &copy; Agricola Las Malocas Ltda 2021. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
