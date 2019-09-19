import React from 'react';
import { useContext } from 'react'
import { cartContext } from '../App'

const Item = props => {
	const cart = useContext(cartContext);
	return (
		<div className="shopping-cart_item">
			<img src={cart[props.id].image} alt={`${cart[props.id].title} book`} />
			<div>
				<h1>{cart[props.id].title}</h1>
				<p>$ {cart[props.id].price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
