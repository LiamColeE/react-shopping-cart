import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { createContext } from 'react'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const cartContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<cartContext.Provider value={cart}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart/>}
				/>
			</div>
		</cartContext.Provider>

	);
}

export default App;
