import React from "react";
import { Link } from "react-router-dom";

const HomeFlashSell = () => {
  return (
    <div className="container mx-auto">
      <div className="section_heading mt-25">
        <h3>
          <span>Flash</span> Sell
        </h3>
        <div className="countdown"></div>
        <Link className="view_all_btn" to="/product">
          View all
        </Link>
      </div>
    </div>
  );
};

export default HomeFlashSell;
