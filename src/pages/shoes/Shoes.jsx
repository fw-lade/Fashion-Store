import React from 'react'
import './shoes.css'
import { useSelector } from 'react-redux';
import ProductCard from '../products/ProductCard';

const Shoes = () => {
  
const products = useSelector((state) => state.products);
const shoes = products.filter((product) => product.category.includes("shoes"));
  return (
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Shoes</h1>
          <div className="title-sort">
            <h2>Shoes({shoes.length})</h2>
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
          {shoes.length > 0 ? (
            shoes
              .filter((product) => product.category.includes("shoes"))
              .map((product, index) => (
                <ProductCard
                  product={product}
                  key={index}
                  relevantCategory="shoes"
                />
              ))
          ) : (
            <h1>No Products found.</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Shoes