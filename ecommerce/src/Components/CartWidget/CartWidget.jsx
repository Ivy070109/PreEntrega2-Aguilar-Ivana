import React from 'react'
import "./CartWidget.css"
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
    <div className="contenedorCarrito">
      <NavLink to={'/login'} className="btn btn-outline-dark"><i class="bi bi-box-arrow-in-right"></i>Suscribete
      </NavLink>
      <NavLink to={'/register'} className="btn btn-outline-dark"><i className="bi bi-person-add"></i>Registrate
      </NavLink>
      <NavLink to={'/cart'} className="btn btn-coding btn btn-outline-dark"><i className="bi bi-cart2"></i>Carrito <span className="numerito">(4)</span>
      </NavLink>
    </div>
    </>
  ) 
}

export default CartWidget
