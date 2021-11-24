import './styles.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container px-5">
                    <a className="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
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
                                <h1 className="display-1 lh-1 mb-3"><strong>Calidad para tus cultivos</strong></h1>
                                <p className="lead fw-normal text-muted mb-5">Realización de toda clase de actividades agropecuarias y/o agroindustriales en terrenos propios o ajenos.</p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <a role="button" className="btn btn-success me-lg-3 mb-4 mb-lg-0" href="#!">Ingresar a muestrame </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="masthead-device-mockup">
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"></rect>
                                </svg><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <div className="device-wrapper">
                                <img src="./src/assets/img/scythe.png" alt="" className="w50 h50"></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <aside className="text-center bg-success">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h5 fs-1 text-white mb-4">"La web de Agricola Las Malocas Ltda está clasificada para brindar a través de un sistema la información de la siembra y recolección de cultivos."</div>
                            <img src="assets/img/tnw-logo.svg" alt="..." style={{ height: '3rem' }} />
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
                                            <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Device Mockups</h3>
                                            <p className="text-muted mb-0">Ready to use HTML/CSS device mockups, no Photoshop
                                                required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center">
                                            <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Flexible Use</h3>
                                            <p className="text-muted mb-0">Put an image, video, animation, or anything else in the
                                                screen!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        <div className="text-center">
                                            <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Free to Use</h3>
                                            <p className="text-muted mb-0">As always, this theme is free to download and use for any
                                                purpose!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center">
                                            <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                            <h3 className="font-alt">Open Source</h3>
                                            <p className="text-muted mb-0">Since this theme is MIT licensed, you can use it
                                                commercially!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                            <div className="features-device-mockup">
                                <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                            <stop className="gradient-start-color" offset="0%"></stop>
                                            <stop className="gradient-end-color" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"></rect>
                                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"></rect>
                                </svg><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50"></circle>
                                </svg>
                                <div className="device-wrapper">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some
                                information about your application, why it was built, the problem it solves, or anything else!
                                There's plenty of space for text here, so don't worry about writing too much.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle"
                                src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                        </div>
                    </div>
                </div>
            </section>
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
