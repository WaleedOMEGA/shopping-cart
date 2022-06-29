import './App.css';
import React,{useState} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { words } from './words.js';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart'
function App() {
	const [products, setProducts] = useState(data);
	const [sort, setSort] = useState('');
	const [size, setSize] = useState('');
	const [cartItems, setCartItems] = useState(data);
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
  return (
		<div className="layout">
			<Header />
			<main>
				<div className="wrapper">
					<Products products={products} />
					<Filter
						productsNumber={products.length}
						handleFilterBySort={handleFilterBySort}
						sort={sort}
						size={size}
						handleFilterBySize={handleFilterBySize}
					/>
				</div>
			  <Cart cartItems={cartItems} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
