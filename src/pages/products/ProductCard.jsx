import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, price, category } = product || {};
  return (
    <>
      <div className="product-card">
        <img src={image} alt="" />
        <div className="product-text">
          <h2>{name}</h2>
          <h3>{category}</h3>
          <h3>₦{price}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
