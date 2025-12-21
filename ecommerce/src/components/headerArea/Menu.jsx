import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import compareIcon from "../../assets/images/compare_black.svg";
import loveIcon from "../../assets/images/love_black.svg";
import cartIcon from "../../assets/images/cart_black.svg";

const Menu = () => {
  return (
    <div className="flex items-center justify-between bg-[#edf5ff] m-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="bg-primary w-2xs h-[60px] px-6 flex items-center rounded-t-xl text-white text-xl cursor-pointer">
          <HiMiniBars3BottomLeft />
          <span className="ml-2 text-base font-normal">Browse Categories</span>
          <IoIosArrowDown className="ml-auto" />
        </div>

        <nav className="flex items-center gap-8 text-base font-medium text-black">
          <NavLink
            className="leading-[60px] hover:text-primary ease-in-out duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="leading-[60px] hover:text-primary ease-in-out duration-300"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="leading-[60px] hover:text-primary ease-in-out duration-300"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="leading-[60px] hover:text-primary ease-in-out duration-300"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="leading-[60px] hover:text-primary ease-in-out duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="pt-[10px]">
              <Link className="relative" to="/compare">
                <img
                  className="w-[30px] h-[25px]"
                  src={compareIcon}
                  alt="Compare"
                />
                <span className="absolute top-[-10px] right-[-5px] w-[20px] h-[20px] rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  9
                </span>
              </Link>
            </li>
            <li className="pt-[10px]">
              <Link className="relative" to="/wishlist">
                <img className="w-[30px] h-[25px]" src={loveIcon} alt="Love" />
                <span className="absolute top-[-10px] right-[-5px] w-[20px] h-[20px] rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  4
                </span>
              </Link>
            </li>
            <li className="pt-[10px]">
              <Link className="relative" to="/cart">
                <img className="w-[30px] h-[25px]" src={cartIcon} alt="Cart" />
                <span className="absolute top-[-10px] right-[-5px] w-[20px] h-[20px] rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  5
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between border-l-2 border-borderColor pl-6 ml-6 cursor-pointer">
            <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white border border-primary text-primary text-2xl mr-3">
              <FiUser />
            </span>
            <h5>Smith Jhon</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
