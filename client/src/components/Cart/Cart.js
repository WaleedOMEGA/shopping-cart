import React from 'react'
import '../../css/Cart/Cart.css';
import Checkout from './../Checkout/Checkout';
import Modal from 'react-modal';
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux';
import { removeCart } from '../../store/actions/cart';

function Cart(props) {
	const [showForm, setShowForm] = React.useState(false);
	const [order, setOrder] = React.useState(false);
	const [value, setValue] = React.useState("");

	const submitOrder = (e) => {
		e.preventDefault();
		const order = {
			name: value.name,
			email: value.email
		};
		setOrder(order);
	};
	const closeModal = () => {
		setOrder(false);
}
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
				<Modal isOpen={order} onRequestClose={closeModal}>
					<div className="order-info">
						<span className='close-modal' onClick={closeModal}>&times;</span>
						<p className="alert-success"> order done</p>
						<table>
							<tr>
								<td>Name:</td>
								<td>{order.name}</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>{order.email}</td>
							</tr>
							<tr>
								<td>Total:</td>
								<td>
									{props.cartItems.reduce((a, p) => {
										return a + p.price;
									}, 0)}
								</td>
							</tr>
							<tr>
								<td>Selected Products:</td>
								<td>
									{props.cartItems.map((p) => (
										<div className="cart-data">
											<p>Number of this products : {p.qty}</p>
											<p>Title of product : {p.title}</p>
										</div>
									))}
								</td>
							</tr>
						</table>
					</div>
				</Modal>
				<div className="cart-items">
					{props.cartItems.map((item) => (
						<div className="cart-item" key={item.id}>
							<img src={item.imageUrl} alt={item.title} />
							<div className="cart-info">
								<p>title : {item.title}</p>
								<p>qty : {item.qty}</p>
								<p>price : ${item.price}</p>
							</div>
							<button onClick={() => props.removeCart(item)}>Remove</button>
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
				<Checkout
					showForm={showForm}
					setShowForm={setShowForm}
					handleChange={handleChange}
					submitOrder={submitOrder}
				/>
			</div>
		</Bounce>
	);
}
export default connect((state) => {
	return {
		cartItems: state.cart.cartItems
	}
},{removeCart})(Cart);