import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import AboutUs from './AboutUs/AboutUs'
import Contact from './Contact/Contact'
import Login from './Login/Login'
import Register from './Register/Register'
import Cart from './Cart/Cart'

const Landing = () => {
  return (
    <BrowserRouter>
        <>
            <Navbar />
            <Routes>
                <Route exact path={"/"} element={<Banner greeting="Bienvenido a Deepest Symphaty Store" />} />
            </Routes>
            <Routes>
                <Route exact path={"/"} element={<ItemListContainer />} />
                <Route exact path={"/productos"} element={   <ItemListContainer />} />
                <Route exact path={"/productos/:id"} element={ <ItemDetailContainer />} />
                <Route exact path={"nosotros"} element={ <AboutUs />} />
                <Route exact path={"/contactos"} element={ <Contact />} />
                <Route exact path={"/login"} element={ <Login />} />
                <Route exact path={"/register"} element={ <Register />} />
                <Route exact path={"/cart"} element={ <Cart />} />
            </Routes>
            <Footer />
        </>
    </BrowserRouter>
  )
}

export default Landing