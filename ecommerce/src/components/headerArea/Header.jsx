import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_2.png";
import { FiSearch } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="container flex items-center justify-between gap-10 mx-auto py-5">
      <Link to="/" className="block, w-32.5">
        <img className="w-full" src={logo} alt="Logo" />
      </Link>

      <div className="flex items-center gap-5 bg-lightBg rounded-full py-1 pl-5 border border-borderColor w-2xl">
        <div className="category border-r border-borderColor py-2 pr-5">
          <select className="text-sm color-paraColor outline-none cursor-pointer w-37.5">
            <option value="#">All Categories</option>
            <option value="#">Fashion</option>
            <option value="#">Elentronics</option>
            <option value="#"> Fashion & Beauty</option>
            <option value="#">Jewelry</option>
            <option value="#">Grocery</option>
          </select>
        </div>
        <form action="#" className="flex items-center w-full relative">
          <input
            className="outline-none text-base w-full py-2 pr-12 pl-0"
            type="text"
            placeholder="Search your product..."
          ></input>
          <button
            type="submit"
            className="w-9.25 h-9.25 rounded-full bg-black text-white flex justify-center items-center cursor-pointer text-xl absolute top-px right-1.25 ease-linear duration-300 hover:bg-primary color:black"
          >
            <FiSearch />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative pl-13 mr-10">
          <span className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-borderColor absolute top-0.75 left-0">
            <VscCallOutgoing />
          </span>
          <p className="text-sm text-paraColor">Hotline:</p>
          <a
            className="text-base font-heading font-semibold color-black hover:text-primary ease-in-out duration-300"
            href="callto:1234567890"
          >
            +(402) 763 282 467
          </a>
        </div>

        <div className="text-sm color-paraColor bg-lightBg rounded-lg outline-none px-2 py-3 w-27.5">
          <select className="w-full outline-none cursor-pointer">
            <option>English</option>
            <option>Arabic</option>
            <option>Hindi</option>
            <option>Chinese</option>
          </select>
        </div>

        <div className="text-sm color-paraColor bg-lightBg rounded-lg outline-none px-2 py-3 w-22.5">
          <select className="w-full outline-none cursor-pointer">
            <option>$USD</option>
            <option>€EUR</option>
            <option>¥JPY</option>
            <option>£GBP</option>
            <option>₹INR</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
