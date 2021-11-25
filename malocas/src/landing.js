import './styles.css';
import campo3 from './assets/img/campo3.jpg';
import campo4 from './assets/img/campo4.jpg';
import campo6 from './assets/img/campo6.jpg';
import azada from './assets/img/scythe.png';
import siembra2 from './assets/img/siembra2.png';
import siembra from './assets/img/siembra.png';
import granja from './assets/img/granja.png';
import ecologia from './assets/img/ecologia.png';



function LandingPage() {
    return (
        <div className="LandingPage">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
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
                            <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Información</a></li>
                            <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Ingreso</a></li>
                            <li className="nav-item"><a role="button" className="btn btn-success me-lg-3" href="#download" >Registro</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h5> Bienvenidos a Agricola Las Malocas Ltda </h5>
                                <h1 className="display-1 lh-1 mb-3 fw-bold" style={{ color: '#034303' }}>Calidad para tus cultivos</h1>
                                <p className="lead fw-normal text-muted mb-5">Realización de toda clase de actividades agropecuarias y/o agroindustriales en terrenos propios o ajenos.</p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <a role="button" className="btn btn-success me-lg-3 mb-4 mb-lg-0" href="#!">Ingresar a Malocas </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={campo6} alt="" style={{ height: '25rem', width: '25rem', borderRadius: '18px' }}></img>
                        </div>
                    </div>
                </div>
            </header>
            <aside className="text-center bg-success">
                <div className="container-fluid px-5 pt-0">
                    <div className="row gx-6 justify-content-center">
                        <div className="col-xl-8">
                            <p className="fs-4 text text-white mb-4">"La web de Agricola Las Malocas Ltda está clasificada para brindar a través de un sistema la información de la siembra y recolección de cultivos."</p>
                            <a role="button" className="btn btn-success btn-lg mb-4 mb-lg-0 w-25" href="#!">Registrarse </a>
                        </div>
                    </div>
                </div>
            </aside>
            <section id="features">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center">
                                        <img src={siembra2} alt="" style={{ height: '5rem', width: '5rem'}}></img>
                                            <h3 className="font-alt">Lorem</h3>
                                            <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center">
                                        <img src={granja} alt="" style={{ height: '5rem', width: '5rem'}}></img>
                                            <h3 className="font-alt">Lorem</h3>
                                            <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        <div className="text-center">
                                        <img src={siembra} alt="" style={{ height: '5rem', width: '5rem'}}></img>
                                            <h3 className="font-alt">Lorem</h3>
                                            <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center">
                                            <img src={ecologia} alt="" style={{ height: '5rem', width: '5rem'}}></img>
                                            <h3 className="font-alt">Lorem</h3>
                                            <p className="text-muted mb-0">Lorem ipsum dolor lorem, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                        <img src={campo3} alt="" style={{ height: '25rem', width: '25rem', borderRadius: '18px' }}></img>
                        </div>
                    </div>
                </div>
            </section>
            <aside className="bg-success">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <p className="fs-2 fw-bold lh-1 text-white mb-4">Malocas Ltda</p>
                            <p className="lead fw-normal text-white mb-5 mb-lg-0">This section is perfect for featuring some
                                information about your application, why it was built, the problem it solves, or anything else!
                                There's plenty of space for text here, so don't worry about writing too much.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <img className="img-fluid rounded-circle"
                                src={campo4} alt="..." width="40vw" height="40vh"/>
                        </div>
                    </div>
                </div>
            </aside>
            <section className="cta">
                <div className="cta-content">
                    <div className="container px-5">
                        <h2 className="text-white display-1 lh-1 mb-4">
                            Stop waiting.
                            <br />
                            Start building.
                        </h2>

                    </div>
                </div>
            </section>
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg"
                            alt="..." /></a>
                        <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">&copy; Your Website 2021. All Rights Reserved.</div>
                        <a href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">FAQ</a>
                    </div>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            <script src="js/scripts.js"></script>
        </div>
    );
}

export default LandingPage;
