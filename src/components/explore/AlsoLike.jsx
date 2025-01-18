import React, { useMemo } from 'react'
import ProductCard from "../../pages/products/ProductCard";
import { useSelector } from 'react-redux';

const AlsoLike = () => {
  const products = useSelector((state) => state.products);

  // Memoize the relatedProducts logic
  const relatedProducts = useMemo(() => {
    return [...products] // Create a shallow copy of the array
      .sort(() => Math.random() - 0.5) // Shuffle the products randomly
      .slice(0, 4); // Pick the first 4 products after shuffling
  }, [products]);

  return (
    <>
      {" "}
      <div className="similar-products sim-phome">
        <h3>Explore More</h3>
        <div className="similar-grid">
          {relatedProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AlsoLike