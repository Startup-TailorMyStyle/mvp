import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Inregistrare</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Nume complet</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Introduceti numele complet"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Adresa email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Parola</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Parola"
                                />
                            </div>
                            <div className="my-3">
                                <p>Aveti deja cont? <Link to="/login" className="text-decoration-underline text-info">Autentificare</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Inregistrare
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register