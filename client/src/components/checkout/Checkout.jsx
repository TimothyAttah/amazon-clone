import React from 'react';
import './Checkout.css';

export const Checkout = () => {
  return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg'
					alt=''
					className='checkout__ad'
				/>
				<div>
					<h2 className='checkout__title'>Your shopping Basket</h2>
				</div>
			</div>
			<div className='checkout__right'>
				<h2 className='checkout__subtitle'>Your subtotal</h2>
			</div>
		</div>
	);
}
