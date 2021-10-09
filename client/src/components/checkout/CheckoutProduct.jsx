import { Star } from '@material-ui/icons';
import React from 'react';
import './Checkout.css';

export const CheckoutProduct = ({id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      {/* <img src={ image } alt="" className="checkoutProduct__image" /> */}
      <div className="checkoutProduct__image-box">
      <img src={ image } alt="" className="checkoutProduct__image" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{ title }</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array( rating ).fill().map( ( _, i ) => (
              <p><Star /></p>
            ))
          }
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}
