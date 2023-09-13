import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import Logo1 from "../../assets/images/logo1.png";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to="#">
            <img src={Logo1} alt="" />
          </Link>
        </div>
        <ul>
          {user ? (
            <ul>
              <li>
                <span style={{ color: "white" }}>Hi {user.displayName}</span>
              </li>
              <li>
                <AiOutlineHome /> <Link to="/">Home</Link>
              </li>
              <li>
                <button onClick={onLogout} className="btn">
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
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
