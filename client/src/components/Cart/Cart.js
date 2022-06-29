import React from 'react'
import '../../css/Cart/Cart.css';
function Cart(props) {
  return (
		<div className="cart-wrapper">
			<div className="cart-title">{props.cartItems.length === 0 ? 'Empty cart':<p>there is {props.cartItems.length} in your cart </p>}</div>
			<div className="cart-items">
              {props.cartItems.map((item => (
                  <div className="cart-item" key={item.id}>
										<img src={item.imageUrl} alt={item.title} />
										<div className="cart-info">
											<p>title : {item.title}</p>
											<p>qty : {item.qty}</p>
											<p>price : ${item.price}</p>
										</div>
										<button onClick={()=>props.removeFromCart(item)}>Remove</button>
									</div>
               )))}
				
			</div>
		</div>
	);
}
export default Cart;