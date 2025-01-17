import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import './Home.css'

function Product({ product }) {
  const options={
    edit :false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth <600 ? 20 :25 ,
    value:product.rating,
    isHalf:true
}
  return (
    <Link className='productCart' to={product._id}>
        <img src={product.image[0].url} alt={product.name}></img>
        <p>{product.name}</p>
        <div>
            <ReactStars {...options} />
            <span>({product.numOfReviwes} Reviwes)</span>
        </div>
        <span>{`₹${product.price}`}</span>
    </Link>
  );
}

export default Product
