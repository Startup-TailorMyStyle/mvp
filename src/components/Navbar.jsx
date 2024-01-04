import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-2 px-4" to="/">TailorMyStyle</NavLink>
                <div className="buttons text-center">
                    <NavLink to="/cart" className="btn btn-outline-primary m-2"><i className="fa fa-cart-shopping mr-1"></i> ({state.length}) </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar