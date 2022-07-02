import React from 'react'
import '../../css/Filter/Filter.css';
import Flip from 'react-reveal/Flip';

function Filter(props) {
  return (
	<Flip>
		<div className="filter-wrapper">
			<h2 className="filter-title">Filter</h2>
			<div className="num-of-products">Number of Products {props.productsNumber}</div>
			<div className="filter-by-size">
				<span>Filter</span>
				<select
					value={props.size}
					className="filter-select"
					onChange={props.handleFilterBySize}
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
					onChange={props.handleFilterBySort}
					className="filter-select"
				>
					<option value="Latest">Latest</option>
					<option value="Lowest">Lowest</option>
					<option value="Highest">Highest</option>
				</select>
			</div>
		</div>
		</Flip>
	);
}
export default Filter;