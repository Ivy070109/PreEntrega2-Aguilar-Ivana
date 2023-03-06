import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className="hero">
        <h1>{props.greeting}</h1>
        <div className="card">
            <img src='./assets/BORA.JPG' className="card-img" alt="Background"/>
            <div className="card-img-overlay">
                <div className="container-text">
                    <p className="card-text">Mira las nuevas tendencias</p>
                    <h5 className="card-title">NUEVOS INGRESOS</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner