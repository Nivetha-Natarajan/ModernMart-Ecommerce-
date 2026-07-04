import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  clearCart,
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      <h3>Total Items: {count}</h3>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.url}
                  alt={item.name}
                  className="cart-image"/>

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Qty: {item.qty}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>
                    <strong>
                      Total: ₹{item.price * item.qty}
                    </strong>
                  </p>
                  <button
                    className="btn-remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  >Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <div className="cart-total">
              Total : ₹{total}
            </div>
            <button
              className="btn-clear"
              onClick={() => dispatch(clearCart())}
            >Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;