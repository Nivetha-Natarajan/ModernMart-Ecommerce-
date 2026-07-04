import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrementItem,
  selectCartItems,
} from "./cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className="product-card">
      <img
        src={product.url}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      {qty === 0 ? (
        <button
          className="btn-add"
          onClick={() => dispatch(addItem(product))}
        >
          Add To Cart
        </button>
      ) : (
        <div className="qty-controls">
          <button
            className="btn-qty"
            onClick={() => dispatch(decrementItem(product.id))}
          >
            -
          </button>
          <span className="qty-display">{qty}</span>
          <button
            className="btn-qty"
            onClick={() => dispatch(addItem(product))}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;