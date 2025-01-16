import React from "react";

const ProductCard = ({ product, relevantCategory }) => {
  const { name, image, price, category } = product || {};
  // const splitCategory = category.join(", ")
  return (
    <>
      <div className="product-card">
        <img src={image} alt="" />
        <div className="product-text">
          <h2>{name}</h2>
          <h3>
            {relevantCategory
              ? relevantCategory
              : Array.isArray(category)
              ? category.join(", ")
              : category}
          </h3>
          <p>₦{price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
