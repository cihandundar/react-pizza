import {
  addToCart,
  clearCart,
  decreaseCart,
  remove,
} from "features/cart/cartSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Kopernik from "../../assets/images/kopernik.gif";

const Cart = () => {
  const items = useSelector((state) => state?.cart.cartItems);
  const dispatch = useDispatch();
  const [isCheckoutPopupOpen, setIsCheckoutPopupOpen] = useState(false);

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

  const handleCheckout = () => {
    handleClearCart(); // Cart'ı sıfırla
    setIsCheckoutPopupOpen(true);
  };

  const closeCheckoutPopup = () => {
    setIsCheckoutPopupOpen(false);
  };

  return (
    <div>
      {items.length === 0 ? (
        <div className="empty">
          <img src={Kopernik} alt="" />
          <h3>
            Your cart is empty. <Link to="/">Start shopping now!</Link>
          </h3>
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
          <div className="cart__btn">
            <button className="clear" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <button className="check" onClick={() => handleCheckout()}>
              Check out
            </button>
          </div>
        </ul>
      )}
      {isCheckoutPopupOpen && (
        <div className="checkout-popup">
          <h2>Checkout Successful</h2>
          <p>Your order has been placed.</p>
          <button className="popup-btn" onClick={() => closeCheckoutPopup()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
