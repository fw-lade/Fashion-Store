import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="links-wrap">
          <div className="footer-links">
            <h3>Shop</h3>
            <div>
              <Link to="/categories">Categories</Link>
              <Link to="/products">All Products</Link>
              <Link to="/men">Men</Link>
              <Link to="/women">Women</Link>
              <Link to="/kids">Kids</Link>
              <Link to="/shoes">Shoes</Link>
            </div>
          </div>
          <div className="social-links">
            <a href="" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="" target="_blank">
              <FaInstagram />
            </a>
            <a href="" target="_blank">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="http://ololade.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              ololade.
            </a>{" "}
            All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
