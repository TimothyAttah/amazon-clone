import React from 'react';
import { Subtotal } from '../subtotal/Subtotal';
import { images } from '../images';
import './Checkout.css';
import { CheckoutProduct } from './CheckoutProduct';
import { useStateValue } from '../../contextAPI/StateProvider';

export const Checkout = () => {

	const [ { basket, user } ] = useStateValue();	
	// REDUCE FUNCTION INSIDE THE SUBTOTAL
	// const price = basket.map( item => item.price )
	// const priceVal = price?.reduce( ( val, res ) => val += res, 0 );
	// const totalPrice = priceVal
	// console.log('total', totalPrice);
	console.log(user);
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
					<h3>Hello, { user[0]?.email }</h3>
					{/* <h3>{ user?.email }</h3> THIS IS THE REAL ONE WITH FIREBASE */}
					<h2 className='checkout__title'>Your shopping Basket</h2>
				</div>
				{ basket.map( item => (
					<CheckoutProduct
						key={ item.id }
						id={ item.id }
						title={ item.title }
						image={ item.image }
						price={ item.price }
						rating={ item.rating }
					/>
				 ))}
			</div>
			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	);
}
