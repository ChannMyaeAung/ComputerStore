import React from "react";
import { homeStyles } from "../../styles";
import { NavLink } from "react-router-dom";

const NewProducts = ({ newProducts, windowWidth, viewAll }) => {
  return (
    <>
      {/* Trending Items Heading */}
      <div id="trending__now_heading" className="flex justify-between">
        <h1 className={`${homeStyles.heading}`}>
          <NavLink>Today's Best Deals</NavLink>
        </h1>
        <NavLink className={`${homeStyles.viewAll}`}>
          View All
          <img
            src={viewAll}
            alt="view all"
            className="w-[10px] h-[10px] aspect-video"
          />
        </NavLink>
      </div>
    </>
  );
};

export default NewProducts;
