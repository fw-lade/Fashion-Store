import React from 'react'
import './women.css'
import { useSelector } from 'react-redux';
import ProductCard from '../products/ProductCard';

const Women = () => {
  const products = useSelector((state) => state.products);
  const womensProduct = products.filter((product) =>
    product.category.includes("women")
  );
  return (
    <>
      <div className="productsPages-wrapper">
        <div className="header">
          <h1>All Women</h1>
          <div className="title-sort">
            <h2>Women({womensProduct.length})</h2>
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
          {womensProduct.length > 0 ? (
            womensProduct
              .filter((product) => product.category.includes("women"))
              .map((product, index) => (
                <ProductCard
                  product={product}
                  key={index}
                  relevantCategory="women"
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

export default Women