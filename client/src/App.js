import './App.css';
import React,{useState} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { words } from './words.js';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
function App() {
	const [products, setProducts] = useState(data);
	const [sort, setSort] = useState('');
	const [size, setSize] = useState('');

	const handleFilterBySize = (e) => {
		setSize(e.target.value);
		if (e.target.value === 'ALL') { 
			setProducts(data);
		}
		let productsClone = [...products];
		let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) > -1);
		setProducts(newProducts);
	};

	const handleFilterBySort = (e) => {
		setSort(e.target.value);
	};
  return (
		<div className="layout">
			<Header />
			<main>
				<div className="wrapper">
					<Products products={products} />
					<Filter
					  handleFilterBySort={handleFilterBySort}
					  sort={sort}
						size={size}
						handleFilterBySize={handleFilterBySize}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
