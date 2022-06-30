import React from 'react';
import '../../css/Checkout/Checkout.css';
import Input from './../Input/Input';
export default function Checkout(props) {
  return (
		<div>
			{props.showForm && (
				<div className="checkout-form">
					<span className="close-icon" onClick={() => props.setShowForm(false)}>
						&times;
					</span>
					<form onSubmit={props.submitOrder}>
						<Input
							label="Name"
							type="text"
							name="name"
							handleChange={props.handleChange}
						/>
						<Input
							label="Email"
							type="email"
							name="email"
							handleChange={props.handleChange}
						/>
						<div>
							<button type="submit">CheckOut</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
