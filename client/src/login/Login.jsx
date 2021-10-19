/* eslint-disable no-empty-pattern */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { images } from '../components/images';
import { useStateValue } from '../contextAPI/StateProvider';
// import { auth } from '../firebase';
import './Login.css';

export const Login = () => {
	const [{}, dispatch] = useStateValue();
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const signIn = e => {
		e.preventDefault();
		// auth.createUserWithEmailAndPassword( email, password )
		//   .then( ( auth ) => {
		// history.push('/')
		// })
		// .catch(error => alert(error.message))
		dispatch({
			type: 'SIGN_IN',
			item: {
				email,
				password,
			},
		});
		history.push('/');
	};

	const register = e => {
		e.preventDefault();
		// auth.createUserWithEmailAndPassword( email, password )
		//   .then( ( auth ) => {
		//   console.log(auth);
		// if(auth){
		//  history.push('/')
		//   } )
		// .catch(error => alert(error.message))
		dispatch({
			type: 'SIGN_IN',
			item: {
				email,
				password,
			},
		});
		history.push('/');
	};
	return (
		<div className='login'>
			<Link to='/'>
				{/* <img
          src="https://upload.wikimedia.org/wikepedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        /> */}
				<img src={images.Logo} alt='' className='login__logo' />
			</Link>
			<div className='login__container'>
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						type='submit'
						onClick={signIn}
						className='login__signInButton'
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<button
					type='submit'
					onClick={register}
					className='login__registerButton'
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};
