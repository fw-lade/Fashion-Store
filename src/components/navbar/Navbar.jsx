import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import cart from "../../assets/images/cart.svg";
import { useSelector } from "react-redux";
import logo from "../../assets/images/nike.svg";
import logoo from "../../assets/images/jays.svg";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const cartItemNo = carts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logoo} alt="logo" />
        </Link>
        <div className="navlinks">
          <NavLink className='nav-link' to="/products">All Products</NavLink>
          <NavLink className='nav-link' to="/men">Men</NavLink>
          <NavLink className='nav-link' to="/women">Women</NavLink>
          <NavLink className='nav-link' to="/kids">Kids</NavLink>
          <NavLink className='nav-link' to="/shoes">Shoes</NavLink>
          <NavLink className='nav-link' to="/categories">Categories</NavLink>
        </div>
        <Link to="/cart" className="nav-cart">
          <span>{cartItemNo}</span>
          <img src={cart} alt="" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
