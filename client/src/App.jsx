import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { Header } from './components/header/Header';
import { Home } from './home/Home';
import { Login } from './login/Login';
// import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';
import { Payment } from './components/payment/Payment';


/* --- DOWNLOAD THIS WHEN ONLINE START ----*/
// import {loadStripe} from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

// const promise = loadStripe(
// 	"pk_test_51hp" 
// )// MAKE SURE YOU GET THE STRIPE PUBLIC KEY WHEN ONLINE

/* --- DOWNLOAD THIS WHEN ONLINE END ----*/ 




export const App = () => {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		// auth.onAuthSateChanged( authUser => {
		// 	console.log( authUser );
		// 	if ( authUser ) {
		// dispatch( {
		// 	type: "SET_USER",
		// 	user: authUser
		// })
		// 	}else{
		//  dispatch( {
		// 	type: "SET_USER",
		// 	user: null
		// })
		// }
		// })

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
					<Route path='/payment'>
						<Header />
						{/* <Elements stripe={promise}>
							<Payment />
						</Elements> USE THIS WITH STRIPE */}
						<Payment />
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
