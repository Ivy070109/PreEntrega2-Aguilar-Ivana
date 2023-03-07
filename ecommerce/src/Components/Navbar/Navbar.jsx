import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <Link to={'/'}><img src="../assets/iconoPrincipal.png" alt="Deepest Symphaty" className="logo" width="60" /></Link>
            <NavLink to={'/'} className="navbar-brand" href="#home">Deepest Symphaty</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to={'/'}  className="nav-link active" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/productos'} className="nav-link">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/nosotros'} className="nav-link">Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/contacto'} className="nav-link">Contacto</NavLink>
                    </li>
                </ul>
              <CartWidget />
            </div>
        </div>
      </nav>
  </div>

 )
}

export default Navbar