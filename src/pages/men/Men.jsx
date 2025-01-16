import React, { useState } from "react";
import "./men.css";
import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";

const Men = () => {
  const products = useSelector((state) => state.products);
  const menProducts = products.filter((product) =>
    product.category.includes("men")
  );

  const [sortOption, setSortOption] = useState("");

  // Handle sorting logic
  const sortedMenProducts = [...menProducts].sort((a, b) => {
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
          <h1>All Men</h1>
          <div className="title-sort">
            <h2>Men({sortedMenProducts.length})</h2>
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
          {sortedMenProducts.length > 0 ? (
            sortedMenProducts.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                relevantCategory="men"
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

export default Men;
