import React from "react";
import Categories from "../categories/Categories";
import HeroSection from "./HeroSection";
import "./home.css";
import { useSelector } from "react-redux";
import AlsoLike from "../../components/explore/AlsoLike";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <HeroSection />
      <AlsoLike />
      <div className="home-categories">
        <h2>All Categories</h2>
        <Categories />
      </div>
    </>
  );
};

export default Home;
