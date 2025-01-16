import React from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Products</h1>
          <div className="title-sort">
            <h2>Products({products.length})</h2>
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
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          ) : (
            <h1>No Products found.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
