import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import icon1 from "../../../assets/images/category_list_icon_1.png";
import icon2 from "../../../assets/images/category_list_icon_2.png";
import icon3 from "../../../assets/images/category_list_icon_3.png";
import icon4 from "../../../assets/images/category_list_icon_4.png";
import icon5 from "../../../assets/images/category_list_icon_5.png";
import icon6 from "../../../assets/images/category_list_icon_6.png";
import icon7 from "../../../assets/images/category_list_icon_7.png";
import icon8 from "../../../assets/images/category_list_icon_8.png";

const MenuCategory = () => {
  return (
    <div className="w-[288px] shadow-md rounded-b-xl">
      <ul>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon1} alt="icon" />
            </div>
            Men's Fashion
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon2} alt="icon" />
            </div>
            women's Fashion
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon3} alt="icon" />
            </div>
            kid's Fashion
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon4} alt="icon" />
            </div>
            denim Collection
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon5} alt="icon" />
            </div>
            western wear
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon6} alt="icon" />
            </div>
            sport wear
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon7} alt="icon" />
            </div>
            footwear
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon8} alt="icon" />
            </div>
            fashion jewellery
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-4 py-2 border-b border-[#ececec] text-sm font-normal text-black capitalize ease-in-out duration-300 hover:bg-lightBg hover:text-primary"
            to="/product"
          >
            <div className="w-8.75 h-8.75 p-1 rounded-full overflow-hidden bg-[#edf5ff] mr-2 border-2 border-white">
              <img className="w-full" src={icon2} alt="icon" />
            </div>
            Beauty & Cosmetics
            <MdKeyboardArrowRight className="ml-auto text-base" />
          </Link>
        </li>
      </ul>
      <Link
        className="flex items-center px-4 py-3 text-sm font-medium text-black capitalize ease-in-out duration-300 hover:text-primary"
        to="/product"
      >
        View All Categories
        <FaArrowRight className="text-sm ml-2" />
      </Link>
    </div>
  );
};

export default MenuCategory;
