import React from "react";
import Categories from "../categories/Categories";
import HeroSection from "./HeroSection";
import "./home.css";
import { useSelector } from "react-redux";
import AlsoLike from "../../components/explore/AlsoLike";
import TrueFocus from "../../components/animated-texts/TrueFocus";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <HeroSection />
      <AlsoLike />
      <TrueFocus
        sentence="Shop Now!"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <div className="home-categories">
        <h2>All Categories</h2>
        <Categories />
      </div>
    </>
  );
};

export default Home;
