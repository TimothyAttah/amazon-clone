import React from 'react';
import { Product } from '../components/product/Product';
import { images } from '../components/images';
import './Home.css';

export const Home = () => {
  return (
		<div className='home'>
			<div className='home__container'>
				<img
					src={images.BackgroundImg}
					// src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt=''
					className='home__image'
				/>
				<div className='home__row'>
					<Product
						id='227565'
						title='The lean startup: How Constant Innovation creates radically successful businesses paperback'
						price={29.99}
						image={images.Item1}
						// image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_5Y400_.jpg'
						rating={5}
					/>
					<Product
						id='458563'
						title='Ninja Personal Blender for Shakes, Smoothies, Food Prep, and Frozen Blending with 700-Watt Base and (2) 16-Ounce Cups with Spout Lids (QB3001SS)'
						price={59.99}
						image={images.Item3}
						rating={4}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='489674'
						title='SAMSUNG LC24F390FHNXZA 24-inch Curved LED Gaming Monitor (Super Slim Design), 60Hz Refresh Rate w/AMD FreeSync Game Mode'
						price={160.0}
						image={images.Item6}
						rating={3}
					/>
					<Product
						id='7754323'
						title='60W (80W Peak) Portable Bluetooth Speaker with Double Subwoofer Heavy Bass, Bluetooth 5.0 Wireless 100ft Outdoor Speaker, Support FM Radio, LED Colorful Lights, Stereo Sound, for Home, Party, Travel'
						price={69.99}
						image={images.Item8}
						rating={5}
					/>
					<Product
						id='0986343'
						title='Fintie Case for iPad 4th Generation/iPad 3rd Gen (2012 Model), iPad 2 (2011 Model) 9.7 inch Tablet - [Corner Protection] Multi-Angle Viewing Smart Cover w/Pocket Auto Sleep/Wake, Love Tree'
						price={34.97}
						image={images.Item11}
						rating={4}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='966453748'
						title='SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black'
						price={299.87}
						image={images.Item4}
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}
