import React from 'react';
import { Link } from '@reach/router';
import campo1 from '../../images/campo1.jpg';

function SignUp() {
    return (
        <div className="SingUp" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
            <div className="container-fluid py-4 px-5">
                <div className="row">
                    <div className="card col-md-8 text-center shadow px-0 mx-auto" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                        <div className="row g-0" >
                            <div className="col-md-6 d-sm-none d-none d-md-block">
                                <img src={campo1} className="img-fluid" style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                            </div>
                            <div className="col-sm-8 col-xs-12 col-md-6">
                                <div className="card-body">
                                    <div className="d-flex justify-content-end">
                                        <Link to="/"><button className="btn-close" /></Link>
                                    </div>
                                    <div className="pb-3 justify-content-center">
                                        <p className="fs-3 pt-5 fw-bold">Crear cuenta</p>
                                    </div>
                                    <form>
                                        <div class="form-group mb-3 row">
                                            <input type="text" className="form-control col rounded-pill mx-2 border-success border-2" placeholder="Nombre" aria-label="nm_rgstr" />
                                            <input type="text" className="form-control col rounded-pill mx-2 border-success border-2" placeholder="Apellido" aria-label="lst_nm_rgstr" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <input type="email" className="form-control col rounded-pill mx-2 border-success border-2" placeholder="Email" aria-label="email_rgstr" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <input type="password" className="form-control col rounded-pill mx-2 border-success border-2" placeholder="Contraseña" aria-label="psswrd_1_rgstr" />
                                            <input type="password" className="form-control col rounded-pill mx-2 border-success border-2" placeholder="Repetir contraseña" aria-label="psswrd_2_rgstr" />
                                        </div>
                                        <div className="d-grid gap-1 form-group py-3">
                                            <button className="btn btn-success rounded-pill col ">CREAR</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <Link to="/login" className="fs-6 text-success text-decoration-none">¡Inicia sesión en Malocas!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;