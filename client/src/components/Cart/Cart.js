import React from 'react'
import '../../css/Cart/Cart.css';
import Checkout from './../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce'

function Cart(props) {
	const [showForm, setShowForm] = React.useState(false);
	const [value, setValue] = React.useState("");

	const submitOrder = (e) => {
		e.preventDefault();
		const order = {
			name: value.name,
			email: value.email
		};
	};

	const handleChange = (e) => {
		setValue((prevState) => ({
			...prevState, [e.target.name]: e.target.value
		}));
	};

	return (
	  <Bounce left cascade>
		<div className="cart-wrapper">
			<div className="cart-title">
				{props.cartItems.length === 0 ? (
					'Empty cart'
				) : (
					<p>there is {props.cartItems.length} in your cart </p>
				)}
			</div>
			<div className="cart-items">
				{props.cartItems.map((item) => (
					<div className="cart-item" key={item.id}>
						<img src={item.imageUrl} alt={item.title} />
						<div className="cart-info">
							<p>title : {item.title}</p>
							<p>qty : {item.qty}</p>
							<p>price : ${item.price}</p>
						</div>
						<button onClick={() => props.removeFromCart(item)}>Remove</button>
					</div>
				))}
			</div>
			{props.cartItems.length !== 0 && (
				<div className="cart-footer">
					<div className="total">
						Total : ${' '}
						{props.cartItems.reduce((acc, p) => {
							return acc + p.price;
						}, 0)}
					</div>
					<button onClick={() => setShowForm(true)}>Select Products</button>
				</div>
			)}
		  <Checkout showForm={showForm} setShowForm={setShowForm} handleChange={handleChange} submitOrder={submitOrder} />
			</div>
			</Bounce>
	);
}
export default Cart;