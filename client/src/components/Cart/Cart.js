import React from 'react'
import '../../css/Cart/Cart.css';
function Cart(props) {
    const [showForm,setShowForm]=React.useState(false)
  return (
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
			{showForm && (
				<div className="checkout-form">
					<span className="close-icon" onClick={() => setShowForm(false)}>
						&times;
					</span>
					<form>
						<div>
							<label>Name :</label>
							<input type="text" required name="name" />
						</div>
						<div>
							<label>Email :</label>
							<input type="email" required name="email" />
						</div>
						<div>
							<button type="submit">CheckOut</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
export default Cart;