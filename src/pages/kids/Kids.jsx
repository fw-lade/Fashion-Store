import { useSelector } from "react-redux";
import "./kids.css";

import React from "react";
import ProductCard from "../products/ProductCard";

const Kids = () => {
  const products = useSelector((state) => state.products);
  const kidsProducts = products.filter((product) =>
    product.category.includes("kids")
  );

  return (
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Kids</h1>
          <div className="title-sort">
            <h2>Kids({kidsProducts.length})</h2>
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
          {kidsProducts.length > 0 ? (
            kidsProducts
              .filter((product) => product.category.includes("kids"))
              .map((product, index) => (
                <ProductCard
                  product={product}
                  key={index}
                  relevantCategory="kids"
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

export default Kids;
