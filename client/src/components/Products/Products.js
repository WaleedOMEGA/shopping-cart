import React from 'react';
import '../../css/Products/Products.css';
import Modal from 'react-modal';
function Products(props){
	return (
		<div className="products-wrapper">
			{props.products.map((product) => (
				<div key={product.id} className="product-item">
					<a href="#">
						<img src={product.imageUrl} alt={product.title} />
					</a>

					<div className="product-desc">
						<p>{product.title}</p>
						<span>{product.price}</span>
					</div>
					<button>Add to Cart</button>
				</div>
			))}
		</div>
	);
}

export default Products;