import React, { useState } from "react";
import "./shoes.css";
import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";

const Shoes = () => {
  const products = useSelector((state) => state.products);
  const shoes = products.filter((product) =>
    product.category.includes("shoes")
  );

  const [sortOption, setSortOption] = useState("");

  // Handle sorting logic
  const sortedShoes = [...shoes].sort((a, b) => {
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
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Shoes</h1>
          <div className="title-sort">
            <h2>Shoes({sortedShoes.length})</h2>
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
          {sortedShoes.length > 0 ? (
            sortedShoes.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                relevantCategory="shoes"
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

export default Shoes;
