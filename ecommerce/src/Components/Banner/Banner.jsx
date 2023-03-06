import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className="hero">
        <h1>{props.greeting}</h1>
        <div className="card">
            <img src='./assets/BORA.JPG' className="card-img" alt="Background"/>
            <div className="card-img-overlay">
                <div className="container">
                    <h5 className="card-title">NEW ARRIVALS</h5>
                    <p className="card-text">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner