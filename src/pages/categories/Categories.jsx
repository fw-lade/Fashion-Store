import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import shoes from "../../assets/images/shoe.webp";

const Categories = () => {
  const categories = [
    {
      name: "All Products",
      path: "/products",
      image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SJJTLKSRCZLVDC2DXT6KNHONCM.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam aut sequi rerum.",
    },
    {
      name: "Men's Fashion",
      path: "/men",
      image:
        "https://img.freepik.com/premium-photo/collection-men-s-clothing-including-jacket-pants-hat_793585-43.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam aut sequi rerum.",
    },
    {
      name: "Women's Fashion",
      path: "/women",
      image:
        "https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM=",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam aut sequi rerum.",
    },
    {
      name: "Kids Fashion",
      path: "/kids",
      image:
        "https://cdn.shopify.com/s/files/1/1246/6441/files/Untitled_design_8af3cdf7-fe22-40bb-abcf-eee4af9f8b23.png?11412696917662623327",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam aut sequi rerum.",
    },
    {
      name: "Shoes",
      path: "/shoes",
      image: shoes,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam aut sequi rerum.",
    },
  ];
  return (
    <>
      <div className="category-wrap">
        {categories.map((category, index) => (
          <Link
            to={`${category.path}`}
            key={index}
            className="category"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${category.image}")`,
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="category-text">
              <h3>{category.name}</h3>
              <p>{category.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
