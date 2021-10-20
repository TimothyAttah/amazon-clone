import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';
import { Order } from './Order';
import { db } from '../../firebase';
import './Orders.css';

export const Orders = () => {
  const [ orders, setOrders ] = useState( [] );
  	const [{ user }] = useStateValue();

  useEffect( () => {
    if ( user ) {
      db
        .collection( 'users' )
        .doc( user?.uid )
        .collection( 'orders' )
        .orderBy( 'created', 'desc' )
        .onSnapshot( snapshot => (
          setOrders( snapshot.docs.map( doc => ( {
            id: doc.id,
            data: doc.data()
          } ) ) )
        ) )
    } else {
      setOrders([])
    }
  },[user])
  return (
		<div className='orders'>
			<h1>Your Orders</h1>
			<div className='orders_order'>
				{orders?.map(order => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}
