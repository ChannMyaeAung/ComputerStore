import React from "react";
import { NavLink } from "react-router-dom";
import { homeStyles } from "../../styles";

const Deals = ({ bestDeals, windowWidth, viewAll }) => {
  function renderBestDeals() {
    return (
      <>
        {bestDeals.map((item, index) => {
          const { id, img, title, originalPrice, dealPrice } = item;
          const percentOffValue =
            ((originalPrice - dealPrice) / originalPrice) * 100;
          return (
            <NavLink key={id} className={`bg-white relative p-3 `}>
              <figure className="aspect-[7/6] mb-6 duration-200 hover:bg-gray-300 focus-visible:bg-gray-300">
                <img src={img} alt={title} className="w-full h-full " />
              </figure>
              <h3 className="mb-3 font-semibold">{title}</h3>
              <p className="flex gap-3 font-medium">
                <span className="line-through text-primaryGray">
                  ${originalPrice.toLocaleString()}
                </span>
                <span className="text-red-600">
                  ${dealPrice.toLocaleString()}
                </span>
              </p>
              <p className="w-[50px] h-[35px] top-0 p-1 text-white text-center absolute bg-red-500 md:text-[16px] text-[14px]">
                {" "}
                -{Math.floor(percentOffValue.toFixed(2))}%{" "}
              </p>
            </NavLink>
          );
        })}
      </>
    );
  }

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

      {/* Best Deals Items */}
      <div
        id="trending__now_items"
        className="grid justify-between grid-cols-2 gap-10 overflow-hidden md:grid-cols-4"
      >
        {renderBestDeals()}
      </div>
    </>
  );
};

export default Deals;
