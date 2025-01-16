import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, relevantCategory }) => {
  const { id, name, image, price, category } = product || {};
  // const splitCategory = category.join(", ")
  return (
    <>
      <Link to={`/product/${id}`} className="product-card">
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
          <p>
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(price)}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
