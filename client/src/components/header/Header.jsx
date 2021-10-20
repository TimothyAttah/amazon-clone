import React from 'react';
import { Link } from 'react-router-dom';
import {Search, ShoppingBasket} from '@material-ui/icons'
import { images } from '../images';
import './Header.css';
import { useStateValue } from '../../contextAPI/StateProvider';
import { auth } from '../../firebase';

export const Header = () => {
	const [ { basket, user }, dispatch ] = useStateValue();

	const handleAuthentication = () => {
		if ( user ) {
			auth.signOut()
			// dispatch( {
			// 	type: 'SIGN_OUT',
			// 	user: null
			// })
		}
	}
  return (
		<div className='header'>
			<Link to='/'>
				<img
					src={images.Logo}
					// src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt=''
					className='header__logo'
				/>
			</Link>
			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<Search className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<Link to={!user && '/login'}>
					<div onClick={handleAuthentication} className='header__option'>
						<span className='header__optionLineOne'>
							Hello {user ? user?.email : 'Guest'}
						</span>
						<span className='header__optionLineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className='header__option'>
						<span className='header__optionLineOne'>Returns</span>
						<span className='header__optionLineTwo'>& orders</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasket />
						<span className='header__optionLineTwo header__basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
