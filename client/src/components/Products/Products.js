import React from 'react';
import '../../css/Products/Products.css';

import ProductModal from './productModal';
function Products(props) {
	const [product, setProduct] = React.useState("");
	const openModal = (product) => { setProduct(product) };
	const closeModal = () => { setProduct(false) };
	return (
		<div className="products-wrapper">
			{props.products.map((product) => (
				<div key={product.id} className="product-item">
					<a href="#" onClick={() => openModal(product)}>
						<img src={product.imageUrl} alt={product.title} />
					</a>

					<div className="product-desc">
						<p>{product.title}</p>
						<span>${product.price}</span>
					</div>
					<button onClick={()=>props.addToCart(product)}>Add to Cart</button>
				</div>
			))}
			<ProductModal product={product} closeModal={closeModal} />
		</div>
	);
}

export default Products;