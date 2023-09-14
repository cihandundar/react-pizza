import {
  addToCart,
  clearCart,
  decreaseCart,
  remove,
} from "features/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state?.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (info) => {
    dispatch(remove(info));
  };
  const handleDecreaseCart = (info) => {
    dispatch(decreaseCart(info));
  };

  const handleIncreaseCart = (info) => {
    dispatch(addToCart(info));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {items.length === 0 ? (
        <div className="empty">
          <h4>Your cart is empty. Start shopping now!</h4>
        </div>
      ) : (
        <ul className="row">
          {items.map((info) => (
            <li className="cart" key={info.id}>
              <div className="cart__img">
                <img src={info.image_url} alt="" />
              </div>
              <div className="cart__title">
                <h3>{info.title}</h3>
              </div>
              <div className="cart__quantity">
                <button onClick={() => handleDecreaseCart(info)}>-</button>
                <div className="cart__quantity__count">
                  <h4>{info.cartQuantity}</h4>
                </div>
                <button onClick={() => handleIncreaseCart(info)}>+</button>
              </div>
              <button className="remove" onClick={() => handleRemove(info)}>
                Remove
              </button>
            </li>
          ))}
          <button className="clear" onClick={() => handleClearCart()}>
            Clear Cart
          </button>
        </ul>
      )}
    </div>
  );
};

export default Cart;
