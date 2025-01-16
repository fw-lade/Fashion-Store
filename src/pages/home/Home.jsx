import React from "react";
import Categories from "../categories/Categories";
import HeroSection from "./HeroSection";
import './home.css'

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1>Home page</h1>
      </div>
      <HeroSection />
      <div className="home-categories">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
