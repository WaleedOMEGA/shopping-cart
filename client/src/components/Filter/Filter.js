import React from 'react'
import '../../css/Filter/Filter.css';
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux';
import { filteredSort,filteredSize } from './../../store/actions/products';
function Filter(props) {
  return (
		<Flip>
			{props.filterProducts && (
				<div className="filter-wrapper">
					<h2 className="filter-title">Filter</h2>
					<div className="num-of-products">
						Number of Products {props.filterProducts.length}
					</div>
					<div className="filter-by-size">
						<span>Filter</span>
						<select
							value={props.size}
							className="filter-select"
							onChange={(e) =>
								props.filteredSize(props.filterProducts, e.target.value)
							}
						>
							<option value="ALL">ALL</option>
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
						</select>
					</div>
					<div className="filter-by-size">
						<span>Order</span>
						<select
							value={props.sort}
							onChange={(e) =>
								props.filteredSort(props.filterProducts, e.target.value)
							}
							className="filter-select"
						>
							<option value="Latest">Latest</option>
							<option value="Lowest">Lowest</option>
							<option value="Highest">Highest</option>
						</select>
					</div>
				</div>
			)}
		</Flip>
	);
}
export default connect((state) => {
	return {
		sort: state.products.sort,
		size: state.products.size,
		products: state.products.products,
		filterProducts:state.products.filterProducts
	}, {
		filteredSize,
		filteredSort
	}
})(Filter);