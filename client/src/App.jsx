import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header'
import { Home } from './home/Home';

export const App = () => {
  return (
		<Router>
			<div className='app'>
        <Switch>
          <Route path="/checkout">
            <Header />
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

