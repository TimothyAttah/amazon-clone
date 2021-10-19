import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../contextAPI/StateProvider';
import { CheckoutProduct } from '../checkout/CheckoutProduct';
import './Payment.css';
import { db } from '../../firebase';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../../contextAPI/reducer';
import {instance} from '../../axios';

export const Payment = () => {
  const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [{ basket, user }, dispatch] = useStateValue();

	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
  const [ clientSecret, setClientSecret ] = useState( true );
  
  useEffect( () => {
    const getClientSecret = async () => {
      const res = await instance( {
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      } )
      setClientSecret(res.data.clientSecret)
    }
    getClientSecret();
  }, [ basket ] );

  const handleSubmit = async ( event ) => {
    event.preventDefault();
    setProcessing( true );

    const payload = await stripe.confirmCardPayment( clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    } ).then( ( { paymentIntent } ) => {
		// db
		// 	.collection( 'users' )
		// 	.doc( user?.uid )
		// 	.collection( 'orders' )
		// 	.doc( paymentIntent.id )
		// 	.set( {
		// 		basket: basket,
		// 		amount: paymentIntent.amount,
		// 		created: paymentIntent.created
		// 	})
      setSucceeded( true );
      setError( null );
			setProcessing( false );
			
			dispatch( {
				type: 'EMPTY_BASKET'
			})
      history.replace('/orders');
    })
  };
	const handleChange = event => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};
	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
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
					<div className='payment__details'>
						<form onSubmit={handleSubmit}>
						 <CardElement onChange={handleChange} />
							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={value => (
                    <h3>Order Total: { value }</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
                /> 
                <button disabled={ processing || disabled || succeeded }>
                  <span>{ processing ? <p>Processing</p> : "Buy Now" }</span>
                </button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
