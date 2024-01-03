import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-2 px-0" to="/">TailorMyStyle</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 fs-3 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Acasa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Produse</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Despre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-primary m-2"><i className="fa fa-sign-in-alt mr-1"></i> Autentificare</NavLink>
                        <NavLink to="/register" className="btn btn-outline-primary m-2"><i className="fa fa-user-plus mr-1"></i> Creare cont</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-primary m-2"><i className="fa fa-cart-shopping mr-1"></i> Cos de cumparaturi ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar