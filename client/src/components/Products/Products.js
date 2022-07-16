import React from 'react';
import { useEffect } from 'react';
import '../../css/Products/Products.css';
import ProductModal from './productModal';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/products';
function Products(props) {
	const [product, setProduct] = React.useState("");
	const openModal = (product) => { setProduct(product) };
	const closeModal = () => { setProduct(false) };
	useEffect(() => {
		props.fetchProducts();
	},[]);
	return (
		<Bounce left cascade>
			<div className="products-wrapper">
				{props.products && props.products.length ? props.products.map((product) => (
					<div key={product.id} className="product-item">
						<a href="#" onClick={() => openModal(product)}>
							<img src={product.imageUrl} alt={product.title} />
						</a>

						<div className="product-desc">
							<p>{product.title}</p>
							<span>${product.price}</span>
						</div>
						<button onClick={() => props.addToCart(product)}>
							Add to Cart
						</button>
					</div>
				)):"loading.."}
				<ProductModal product={product} closeModal={closeModal} />
			</div>
		</Bounce>
	);
}

export default connect((state) => {
	return {
		products: state.products.filterProducts,
	};
}, {fetchProducts})(Products);