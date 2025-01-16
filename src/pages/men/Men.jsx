import React from "react";
import "./men.css";
import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";

const Men = () => {
  const products = useSelector((state) => state.products);
  const menProducts = products.filter(
    (product) => product.category.includes("men")
  );

  return (
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Men</h1>
          <div className="title-sort">
            <h2>Men({menProducts.length})</h2>
            <div className="sort">
              <select name="" id="">
                <option value="">Sort by:</option>
                <option value="">Newest</option>
                <option value="">Price: High-Low</option>
                <option value="">Price: Low-High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="products-grid">
          {menProducts.length > 0 ? (
            menProducts
              .filter((product) => product.category.includes("men"))
              .map((product, index) => (
                <ProductCard
                  product={product}
                  key={index}
                  relevantCategory="men"
                />
              ))
          ) : (
            <h1>No Products found.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Men;
