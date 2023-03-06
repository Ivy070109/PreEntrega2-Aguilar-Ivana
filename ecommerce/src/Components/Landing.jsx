import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'

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
                <Route exact path={"/category/:id"} element={   <ItemListContainer />} />
                <Route exact path={"/producto/:id"} element={ <ItemDetailContainer />} />
            </Routes>
            <Footer />
        </>
    </BrowserRouter>
  )
}

export default Landing