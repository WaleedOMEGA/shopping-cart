import React from 'react'
import Modal from 'react-modal';
function orderModal(props) {
    const { order, closeModal,cartItems } = props;
  return (
		<Modal isOpen={order} onRequestClose={closeModal}>
			<div className="order-info">
				<span className="close-modal" onClick={closeModal}>
					&times;
				</span>
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
							{cartItems.map((p) => (
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
	);
}

export default orderModal;
