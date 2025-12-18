import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import compareIcon from "../../assets/images/compare_black.svg";
import loveIcon from "../../assets/images/love_black.svg";
import cartIcon from "../../assets/images/cart_black.svg";

const Menu = () => {
  return (
    <div className="flex items-center justify-between bg-[#edf5ff] m-auto">
      <div className="w-[1600px] m-auto flex items-center justify-between">
        <div className="bg-primary w-2xs h-[60px] px-6 flex items-center rounded-t-xl text-white text-xl cursor-pointer">
          <HiMiniBars3BottomLeft />
          <span className="ml-2 text-base font-normal">Browse Categories</span>
          <IoIosArrowDown className="ml-auto" />
        </div>

        <nav>
          <h1>Main Menu</h1>
        </nav>

        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li>
              <img src={compareIcon} alt="Compare" />
            </li>
            <li>
              <img src={loveIcon} alt="Love" />
            </li>
            <li>
              <img src={cartIcon} alt="Cart" />
            </li>
          </ul>
          <div className="flex items-center justify-between border-l-2 border-borderColor pl-6 ml-6 cursor-pointer">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white border border-primary text-primary text-2xl mr-3">
              <FiUser />
            </span>
            <h4>Smith Jhon</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
