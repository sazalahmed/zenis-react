import React from "react";
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import heroAddBg from "../../../assets/images/hero_add_bg.jpg";

const HeroAdd = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroAddBg})` }}
      className="w-82 h-121.25 rounded-2xl mt-7 p-10 bg-cover flex flex-col justify-start items-start"
    >
      <h4 className="text-lg font-cursive! font-semibold! text-primary! bg-white px-5 rounded-full tracking-widest">
        Summer Offer
      </h4>
      <h2 className="text-2xl font-bold mt-3 mb-6">
        Where Fashion Meets Individuality
      </h2>
      <Link className="common_btn" to="/product-details">
        Shop Now
        <ImArrowUpRight2 />
      </Link>
    </div>
  );
};

export default HeroAdd;
