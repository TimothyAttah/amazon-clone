import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { Header } from './components/header/Header'
import { Home } from './home/Home';
import { Login } from './login/Login';

export const App = () => {
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
}

