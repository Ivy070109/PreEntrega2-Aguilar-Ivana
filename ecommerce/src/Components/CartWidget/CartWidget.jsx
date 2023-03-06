import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (

    <div className="contenedorCarrito">
      <a href="#home" className="btn btn-outline-dark"><i class="bi bi-box-arrow-in-right"></i>Login
      </a>
      <a href="#home" className="btn btn-outline-dark"><i className="bi bi-person-add"></i>Register
      </a>
      <a href="#home" className="coding btn btn-outline-dark"><i className="bi bi-cart2"></i>Cart <span className="numerito">(4)</span>
      </a>
    </div>

  )
}

export default CartWidget
