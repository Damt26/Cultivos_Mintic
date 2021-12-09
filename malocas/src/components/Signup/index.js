import React from 'react';
import '../../styles/index.css';
import campo1 from '../../images/campo1.jpg';

function SignUp() {
    return (
        <div className="SingUp" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
            <div className="container mx-auto py-4 px-5 w-75">
                <div className="card h-50 text-center" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                    <div className="row g-0" >
                        <div className="col-md-6 d-sm-none d-none d-md-block">
                            <img src={campo1} className="img-fluid " style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="d-flex mb-3">
                                    <div className="p-3 ms-auto">
                                        <p className="fs-3 pt-5">Crear cuenta</p>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="/"><button className="btn-close" /></a>
                                    </div>
                                </div>
                                <form className="fs-5" id="form_rgstr">
                                    <div class="input-group mb-3 input-group-lg">
                                        <input type="text" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Nombre" aria-label="nm_rgstr" />
                                        <input type="text" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Apellido" aria-label="lst_nm_rgstr" />
                                    </div>
                                    <div class="input-group mb-3 input-group-lg">
                                        <input type="email" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Email" aria-label="email_rgstr" />
                                    </div>
                                    <div class="input-group mb-3 input-group-lg">
                                        <input type="password" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Contraseña" aria-label="psswrd_1_rgstr" />
                                        <input type="password" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Repetir contraseña" aria-label="psswrd_2_rgstr" />
                                    </div>
                                    <div className="d-grid gap-1 input-group input-group-lg py-3">
                                        <button className="btn btn-success btn-lg rounded-pill">CREAR</button>
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="fs-6 text-success text-decoration-none" href="/login">¡Inicia sesión en Malocas!</a>
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