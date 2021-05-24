import React from 'react'
import { db } from './firebase'
import './Product.css'

function Product({ id, title, image, price, rating }) {

    // const addToCart = () => {
    //     const cartItem = db.collection('cart-items').doc(id);
    //     cartItem.get()
    //     .then((doc)=>{
    //         if(doc.exists){
    //             cartItem.update({
    //                 quantity: parseInt(doc.data().quantity) + 1
    //             })
    //         } else {
    //             cartItem.set({
    //                 title: title,
    //                 image: image,
    //                 price: price,
    //                 quantity: 1
    //             })
    //         }
    //     })
        
    // }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                    <p class="fa fa-star checked"></p>
                    ))}
                </div>
                {/* <button onClick={addToCart} >Add to Cart</button> */}
            </div>
            <img src={image} alt=""/>
            <button>Add to cart</button>
        </div>
    )
}

export default Product
