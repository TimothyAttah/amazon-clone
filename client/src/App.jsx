import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { Header } from './components/header/Header';
import { Home } from './home/Home';
import { Login } from './login/Login';
import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';
import { Payment } from './components/payment/Payment';
import { Orders } from './components/orders/Orders';


import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
	'pk_test_51JmHqYKAh2TuRMk11ZFyPMn2IkkRMEHVAu7UVTh2f6TOYIKNAbhXow7byjQLi813EdDYXPtkQuJ2l3oej1J3xkgx00CiifpDQb'
);


export const App = () => {
	const [{ user }, dispatch] = useStateValue();
	useEffect( () => {
		
		auth.onAuthStateChanged( authUser => {
			console.log('This is USER', authUser );
			if ( authUser ) {
		dispatch( {
			type: "SET_USER",
			user: authUser
		})
			}else{
		 dispatch( {
			type: "SET_USER",
			user: null
		})
		}
		})

		if (user) {
			console.log('this is user login >>>', user);
			dispatch({
				type: 'SET_USER',
				user: user,
			});
		} else {
			console.log('this is user login >>>');
		}
	}, [user, dispatch]);
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/orders'>
						<Header />
						<Orders />
					</Route>
					<Route path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/' exact>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
