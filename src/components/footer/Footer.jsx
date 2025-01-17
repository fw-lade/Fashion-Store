import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

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
          <div className="social-links"></div>
        </div>
        <div className="copyright">
          <p>© 2025 ololade. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer