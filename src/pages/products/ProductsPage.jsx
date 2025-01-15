import React from "react";
import ProductCard from "./ProductCard";
import "./product.css";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Airforce 1",
      price: 10000,
      image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.4/h_424,c_limit/05021bfa-ea0a-4456-b0fa-e68b76307673/air-force-1-07-shoes-h7Sg1d.png",
      category: "Men's Shoes",
    },
  ];
  return (
    <>
      <div className="products-wrapper">
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
        <div>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
