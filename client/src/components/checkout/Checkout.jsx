import React from 'react';
import { Subtotal } from '../subtotal/Subtotal';
import { images } from '../images';
import './Checkout.css';
// import { useStateValue } from '../../contextAPI/StateProvider';

export const Checkout = () => {

	// const [ { basket } ] = useStateValue();	
	// REDUCE FUNCTION INSIDE THE SUBTOTAL
	// const price = basket.map( item => item.price )
	// const priceVal = price?.reduce( ( val, res ) => val += res, 0 );
	// const totalPrice = priceVal
	// console.log('total', totalPrice);
  return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					src={images.BackgroundImg2}
					// src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg'
					alt=''
					className='checkout__ad'
				/>
				<div>
					<h2 className='checkout__title'>Your shopping Basket</h2>
				</div>
			</div>
			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	);
}
