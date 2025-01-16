import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/carts/cartSlice";
import ProductCard from "./ProductCard";

const SingleProduct = () => {
  const { productId } = useParams();

  const products = useSelector((state) => state.products);

  const singleProduct = products.filter(
    (product) => product.id.toString() === productId
  );

  const { id, name, price, image, category } = singleProduct[0] || {};

  const similarProducts = products.filter(
    (product) =>
      product.category.includes(singleProduct[0].category) &&
      product.id !== id
  );
  console.log(similarProducts);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct[0]));
  };

  return (
    <>
      <div className="product">
        <img src={image} alt="" />
        <div className="product-deets">
          <h2>{name}</h2>
          <p>{price}</p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      <div className="similar-products">
        <h3>Similar Products(category):</h3>
        <div className="similar-grid">
          {similarProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
