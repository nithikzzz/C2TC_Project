import React from "react";
import logo from "C:/Users/nithi/OneDrive/Documents/React_JS/MallProject/shoppingmall/src/images/logo1.png";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="bg">
      <div className="navbar">
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/customer" className="link">
              Customers
            </Link>
            <Link to="/order" className="link">
              Orders
            </Link>
            <Link to="/Entertainment" className="link">
              Entertainment
            </Link>
            <Link to="/cinema" className="link">
              Cinemas
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Nav;
