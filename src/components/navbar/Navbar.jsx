import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import cart from "../../assets/images/cart.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const cartItemNo = carts.reduce(
    (total, product) => total + product.quantity,
    0
  );

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
          <NavLink to="/">Shoes</NavLink>
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
