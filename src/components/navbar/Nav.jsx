import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import cart from "../../assets/images/cart.svg";
import { useSelector } from "react-redux";
import logo from "../../assets/images/nike.svg";
import logoo from "../../assets/images/jays.svg";

const Nav = () => {
  const carts = useSelector((state) => state.carts);
  const cartItemNo = carts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <nav className="nav">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <NavLink to="/kids">Kids</NavLink>
        <NavLink to="/shoes">Shoes</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <Link to="/cart" className="nav-cart">
          <span>{cartItemNo}</span>
          <img src={cart} alt="" />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
