import React from "react";
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import sliderImage01 from "../../../assets/images/slider_1.jpg";

const HeroSlider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${sliderImage01})` }}
      className="w-217.5 h-121.25 rounded-2xl mt-7 p-15 bg-cover flex flex-col justify-center items-start"
    >
      <h4 className="text-xl font-cursive! font-semibold! text-primary! tracking-wider">
        Best selling of 2026
      </h4>
      <h1 className="text-[42px] max-w-md leading-13 mt-2 mb-8">
        Make Your Fashion Look More Changing
      </h1>
      <Link className="common_btn" to="/product-details">
        Shop Now
        <ImArrowUpRight2 />
      </Link>
    </div>
  );
};

export default HeroSlider;
