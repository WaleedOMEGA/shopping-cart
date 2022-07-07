import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { words } from './words.js';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
	const [products, setProducts] = useState(data);
	const [sort, setSort] = useState('');
	const [size, setSize] = useState('');
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem('cartItems')) || []
	);

	const handleFilterBySize = (e) => {
		setSize(e.target.value);
		if (e.target.value === 'ALL') { 
			setProducts(data);
		} else {
			let productsClone = [...products];
			let newProducts = productsClone.filter(
				(p) => p.size.indexOf(e.target.value) > -1,
			);
			setProducts(newProducts);
		}
		
	};

	const handleFilterBySort = (e) => {
		let order=e.target.value;
		setSort(order);
		let productsClone = [...products];
		let newProducts = productsClone.sort(function (a, b) {
			if (order === 'Lowest') {
				return a.price - b.price;
			} else if (order === 'Highest') { 
				return b.price - a.price;
			} else {
				return a.id - b.id ? 1 : -1;
			}
		});
		setProducts(newProducts);
	};

	const addToCart = (product) => {
		const cartItemsClone = [...cartItems];
		let isProductExist = false;
		cartItemsClone.forEach(item => {
			if (item.id == product.id) {
				item.qty++;
				isProductExist = true;
			}
		});
		if (!isProductExist) {
			cartItemsClone.push({...product,qty:1})
		}
		setCartItems(cartItemsClone)
	};

	const removeFromCart = (product) => {
		const cartItemsClone = [...cartItems];
		setCartItems(cartItemsClone.filter(p=>p.id != product.id))
	}

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);
	return (
		<Provider store={store}>
			<div className="layout">
				<Header />
				<main>
					<div className="wrapper">
						<Products products={products} addToCart={addToCart} />
						<Filter
							productsNumber={products.length}
							handleFilterBySort={handleFilterBySort}
							sort={sort}
							size={size}
							handleFilterBySize={handleFilterBySize}
						/>
					</div>
					<Cart cartItems={cartItems} removeFromCart={removeFromCart} />
				</main>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
