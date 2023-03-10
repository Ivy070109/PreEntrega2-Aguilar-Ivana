import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { NavLink } from 'react-router-dom';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);


    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      getProducts();
    }, []);


    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    } 

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}>Todos los productos</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("men's clothing")}>Hombres</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("women's clothing")}>Mujeres</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("jewelery")}>Joyería</button>
                    <button className="btn btn-outline-dark me-2"onClick={() =>filterProduct("electronics")}>Electronica</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-80 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="200" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/productos/${product.id}`} className="btn btn-outline-dark">Más Detalles</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }


    return (
        <div>
           <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h2 className="display-6">Últimos Ingresos</h2>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                <ShowProducts />
            </div>
           </div>
        </div>
  )
}

export default ItemListContainer