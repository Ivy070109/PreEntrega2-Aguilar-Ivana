import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [itemDetail, setItemDetail] = useState([]);
//const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      //setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setItemDetail(await response.json());
      //setLoading(false);
    }
    getProduct();
  }, [])
  

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={itemDetail.image} alt={itemDetail.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {itemDetail.category}
          </h4>
          <h1 className="display-5">{itemDetail.title}</h1>
          <p className="lead fw-bolder">
            Puntuación del producto {itemDetail.rating && itemDetail.rating.rate}<i class="bi bi-star-fill"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {itemDetail.price}</h3>
          <p className="lead">{itemDetail.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">Añadir al carrito</button>
          <NavLink to={"/cart"} className="btn btn-dark ms-2 px-3 py-2">Ir al carrito</NavLink>
        </div>
      </>
    )
  }


  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProduct />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer