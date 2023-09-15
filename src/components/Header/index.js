import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import Logo1 from "../../assets/images/logo1.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to="#">
            <img src={Logo1} alt="" />
            <h2>Kopernik Pizza</h2>
          </Link>
        </div>
        <ul>
          {user ? (
            <ul>
              <li className="link">
                <AiOutlineHome /> <Link to="/">Home</Link>
              </li>
              <li className="link">
                <AiOutlineShoppingCart /> <Link to="cart">Cart</Link>
                {cartItemCount > 0 && (
                  <span
                    style={{ marginLeft: "6px" }}
                    className="cart-item-count"
                  >
                    {cartItemCount}
                  </span>
                )}
              </li>
              <li className="link">
                <button onClick={onLogout} className="btn">
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="link">
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li className="link">
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
