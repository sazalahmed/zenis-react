import React from "react";
import MenuCategory from "./components/MenuCategory";
import HeroSlider from "./components/HeroSlider";
import HeroAdd from "./components/HeroAdd";
import HomeCategory from "./components/HomeCategory";
import Features from "./components/features";
import HomeFlashSell from "./components/HomeFlashSell";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-between">
        <MenuCategory />
        <HeroSlider />
        <HeroAdd />
      </div>
      <Features />
      <HomeFlashSell />
      <HomeCategory />
    </>
  );
};

export default Home;
