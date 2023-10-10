import React from "react";
import { NavLink } from "react-router-dom";
import { homeStyles, styles } from "../../styles";

const Deals = ({ bestDeals, windowWidth, viewAll }) => {
  function renderBestDeals() {
    return (
      <>
        {bestDeals.map((item, index) => {
          const { id, img, title, originalPrice, dealPrice } = item;

          /* Calculating the percentage value of discount price (e.g. -10% off) */
          const percentOffValue =
            ((originalPrice - dealPrice) / originalPrice) * 100;

          /* Display only 4 items on small screens below 768px,
            Display all items on large screens >= 768px
            */
          return windowWidth >= 768 || index < 4 ? (
            <NavLink
              key={id}
              className={`bg-white relative p-3 shadow-md border`}
            >
              <figure className={`${styles.figure} relative`}>
                <img src={img} alt={title} className="w-full h-full " />
                <div className="overlay" />
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
              <p className="w-[50px] h-[35px] left-1 top-1 p-1 text-white text-center absolute bg-red-500 md:text-[14px] lg:text-[16px] text-[13px]">
                {" "}
                -{Math.floor(percentOffValue.toFixed(2))}%{" "}
              </p>
            </NavLink>
          ) : null;
        })}
      </>
    );
  }

  return (
    <>
      {/* Deals Heading */}
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
        className="grid justify-between grid-cols-2 overflow-hidden md:grid-cols-3 place-items-center lg:grid-cols-4"
      >
        {renderBestDeals()}
      </div>
    </>
  );
};

export default Deals;
