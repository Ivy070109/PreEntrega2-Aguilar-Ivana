import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <img src="./assets/iconoPrincipal.png" alt="logo" className="logo"/>
            <a className="navbar-brand" href="#home">Deepest Symphaty</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>
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