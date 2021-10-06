import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import { Header } from './components/header/Header'
import { Home } from './home/Home';

export const App = () => {
  return (
		<Router>
			<div className='app'>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
				</Switch>
			</div>
		</Router>
	);
}

