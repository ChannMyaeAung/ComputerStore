import React from "react";
import { homeStyles, styles } from "../../styles";
import { NavLink } from "react-router-dom";

const NewProducts = ({ newProducts, windowWidth, viewAll }) => {
  return (
    <>
      {/* Heading */}
      <div id="trending__now_heading" className="flex justify-between">
        <h1 className={`${homeStyles.heading}`}>
          <NavLink>What's new in store</NavLink>
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

      {/* New Products */}
      <div id="new__products" className="grid grid-cols-2">
        {newProducts.map((item, index) => (
          <div id={item.id} className="p-3 border">
            <figure className={`${styles.figure} relative`}>
              <img src={item.img} alt={item.title} className="w-full h-full" />
              <div className="overlay" /> {/* Overlay */}
            </figure>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="font-medium text-primaryGray">${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProducts;
