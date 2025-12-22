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
        <div className="bg-primary w-2xs h-15 px-6 flex items-center rounded-t-xl text-white text-xl cursor-pointer">
          <HiMiniBars3BottomLeft />
          <span className="ml-2 text-base font-normal">Browse Categories</span>
          <IoIosArrowDown className="ml-auto" />
        </div>

        <nav className="flex items-center gap-8 text-base font-medium text-black">
          <NavLink
            className="leading-15 hover:text-primary ease-in-out duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="leading-15 hover:text-primary ease-in-out duration-300"
            to="/product"
          >
            Shop
          </NavLink>
          <NavLink
            className="leading-15 hover:text-primary ease-in-out duration-300"
            to="/flashsell"
          >
            Flash Deals
          </NavLink>
          <NavLink
            className="leading-15 flex items-center gap-1 hover:text-primary ease-in-out duration-300"
            to="#"
          >
            Pages <IoIosArrowDown />
          </NavLink>
          <NavLink
            className="leading-15 hover:text-primary ease-in-out duration-300"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="leading-15 hover:text-primary ease-in-out duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="pt-2.5">
              <Link className="relative" to="/compare">
                <img className="w-7.5 h-6.25" src={compareIcon} alt="Compare" />
                <span className="absolute -top-2.5 -right-1.25 w-5 h-5 rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  9
                </span>
              </Link>
            </li>
            <li className="pt-2.5">
              <Link className="relative" to="/wishlist">
                <img className="w-7.5 h-6.25" src={loveIcon} alt="Love" />
                <span className="absolute -top-2.5 -right-1.25 w-5 h-5 rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  4
                </span>
              </Link>
            </li>
            <li className="pt-2.5">
              <Link className="relative" to="/cart">
                <img className="w-7.5 h-6.25" src={cartIcon} alt="Cart" />
                <span className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-primary text-white text-xs flex justify-center items-center">
                  5
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between border-l-2 border-borderColor pl-6 ml-6 cursor-pointe">
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-primary text-primary text-2xl mr-3">
              <FiUser />
            </span>
            <h5 className="text-base font-medium!">Smith Jhon</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
