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

  const { id, name, price, image, category, desc } = singleProduct[0] || {};

  // const similarProducts = products.filter(
  //   (product) =>
  //     product.category.includes(singleProduct[0].category) &&
  //     product.id !== id
  // );

  const relatedProducts = products.slice(0,4) 


  // NOTE!

  // CHANGE PRODUCT ALREADY IN CART ALERT TO TOAST
  // ADD REMOVE CURRENT PRODUCT, ALSO TRY RANDOM PRODUCTS
  // MAKE TOAST SHOW FROM TOP_CENTER
  // ADD MORE PRODUCTS
  // ADD AOS
  // ADD SPICE - SVG?
  // HERO SECTION TEMPLATE BEFORE VID
  // WORK ON HOME PAGE
  // LOOK FOR VIDEOS FOR HOME PAGE
  // LOOK FOR LOGO - CHECK CANVA
  // FOOTER!!!!!!!!!!! -SOCIAL LINKS, COPYRIGHT, CONTACT ADMIN
  // START RESPONSIVENESS


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
          <p>{desc}</p>
          <h3>
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(price)}
          </h3>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      <div className="similar-products">
        <h3>You might also like</h3>
        <div className="similar-grid">
          {relatedProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
