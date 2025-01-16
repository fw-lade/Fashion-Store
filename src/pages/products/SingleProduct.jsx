import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/carts/cartSlice";

const SingleProduct = () => {
  const { productId } = useParams();

  const products = useSelector((state) => state.products);

  const singleProduct = products.filter(
    (product) => product.id.toString() === productId
  );
  // console.log(singleProduct);

  const { id, name, price, image, category } = singleProduct[0] || {};

  const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(singleProduct[0]));
    };

  return (
    <>
      <div className="product">
        <img src={image} alt="" />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default SingleProduct;
