import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import cart from "../../assets/images/cart.svg";
import { useSelector } from "react-redux";
import logo from "../../assets/images/nike.svg";
import logoo from "../../assets/images/jays.svg";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Nav = () => {
  const carts = useSelector((state) => state.carts);
  const cartItemNo = carts.reduce(
    (total, product) => total + product.quantity,
    0
  );

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
      <nav className="nav">
        <NavLink className="nav-link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="nav-link" to="/products">
          All Products
        </NavLink>
        <NavLink className="nav-link" to="/shoes">
          Shoes
        </NavLink>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <NavLink className="nav-link" to="/men">
          Men
        </NavLink>
        <NavLink className="nav-link" to="/women">
          Women
        </NavLink>
        <NavLink className="nav-link" to="/kids">
          Kids
        </NavLink>
        <div className="nav-menu">
          <Link to="/cart" className="nav-cart">
            <span>{cartItemNo}</span>
            <img src={cart} alt="" />
          </Link>
          <div className="menu" onClick={toggleSidebar}>
            MENU <MdMenu />
          </div>
          <SignedOut>
            <SignInButton className='signnin' mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {/* Sidebar overlay */}
      <div
        className={`overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar menu */}
      <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <IoClose className="close-icon" onClick={toggleSidebar} />
        <nav className="sidebar-links">
          <NavLink to="/products" onClick={toggleSidebar}>
            All Products
          </NavLink>
          <NavLink to="/men" onClick={toggleSidebar}>
            Men
          </NavLink>
          <NavLink to="/women" onClick={toggleSidebar}>
            Women
          </NavLink>
          <NavLink to="/kids" onClick={toggleSidebar}>
            Kids
          </NavLink>
          <NavLink to="/shoes" onClick={toggleSidebar}>
            Shoes
          </NavLink>
          <NavLink to="/categories" onClick={toggleSidebar}>
            Categories
          </NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </nav>
    </>
  );
};

export default Nav;
