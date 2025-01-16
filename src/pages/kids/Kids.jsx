import { useSelector } from "react-redux";
import "./kids.css";
import React, { useState } from "react";
import ProductCard from "../products/ProductCard";

const Kids = () => {
  const products = useSelector((state) => state.products);
  const kidsProducts = products.filter((product) =>
    product.category.includes("kids")
  );

  const [sortOption, setSortOption] = useState("");

  // Sorting logic
  const sortedKidsProducts = [...kidsProducts].sort((a, b) => {
    if (sortOption === "newest") {
      return b.id - a.id; // Assuming higher IDs are newer
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
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Kids</h1>
          <div className="title-sort">
            <h2>Kids({sortedKidsProducts.length})</h2>
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
          {sortedKidsProducts.length > 0 ? (
            sortedKidsProducts.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                relevantCategory="kids"
              />
            ))
          ) : (
            <div className="noProductsFound">
              <h1>No Products found.</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Kids;
