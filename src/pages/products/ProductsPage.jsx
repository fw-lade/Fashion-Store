import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineSlash } from "react-icons/hi2";

const ProductsPage = () => {
  const products = useSelector((state) => state.products);
  const [sortOption, setSortOption] = useState("");

  // Handle sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "newest") {
      return b.id - a.id; // Assuming higher ID means newer
    }
    if (sortOption === "price-high-low") {
      return b.price - a.price;
    }
    if (sortOption === "price-low-high") {
      return a.price - b.price;
    }
    return 0; // Default order
  });

  return (
    <div className="productsPages-wrapper">
      <div className="header">
        <h1>All Products</h1>
        <div className="title-sort">
          <div>
            <div className="bread-wrap">
              <Link to="/categories">Categories</Link>
              <HiOutlineSlash className="slash" />
              <span>All Products</span>
            </div>
            <h2>All Products({products.length})</h2>
          </div>
          <div className="sort">
            <select
              name="sort"
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by:</option>
              <option value="newest">Newest</option>
              <option value="price-high-low">Price: High-Low</option>
              <option value="price-low-high">Price: Low-High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="products-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))
        ) : (
          <div className="noProductsFound">
            <h1>No Products found.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
