import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { Header } from './components/header/Header';
import { Home } from './home/Home';
import { Login } from './login/Login';
// import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';

export const App = () => {
	const [{ user, basket }, dispatch] = useStateValue();
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
	}, [user]);
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
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
