import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import cart from '../../assets/images/cart.svg'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
        <div className="navlinks">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/">Men</NavLink>
          <NavLink to="/">Women</NavLink>
          <NavLink to="/">Kids</NavLink>
        </div>
        <Link to="/cart" className="nav-cart">
          <img src={cart} alt="" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
