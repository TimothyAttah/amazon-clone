/* eslint-disable no-empty-pattern */
import { Star } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';
import './Checkout.css';

export const CheckoutProduct = ( { id, image, title, price, rating, hideButton } ) => {
  const [{}, dispatch ] = useStateValue();	
  const removeFromBasket = () => {
    dispatch( {
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
		<div className='checkoutProduct'>
			{/* <img src={ image } alt="" className="checkoutProduct__image" /> */}
			<div className='checkoutProduct__image-box'>
				<img src={image} alt='' className='checkoutProduct__image' />
			</div>
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<Star />
							</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</div>
	);
}
