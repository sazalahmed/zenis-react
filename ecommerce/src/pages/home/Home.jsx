import React from "react";
import MenuCategory from "./components/MenuCategory";
import HeroSlider from "./components/HeroSlider";
import HeroAdd from "./components/HeroAdd";

const Home = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <MenuCategory />
      <HeroSlider />
      <HeroAdd />
    </div>
  );
};

export default Home;
