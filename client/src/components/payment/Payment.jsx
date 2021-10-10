import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contextAPI/StateProvider';
import { CheckoutProduct } from '../checkout/CheckoutProduct';
import './Payment.css';

export const Payment = () => {
  const [ { basket, user }, dispatch ] = useStateValue();
  return (
		<div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{ basket?.length }</Link>)
        </h1>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user[0]?.email}</p>
						<p>123 React Amazon Clone</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map(item => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
          </div>
          <div className="payment__details">

          </div>
				</div>
			</div>
		</div>
	);
};
