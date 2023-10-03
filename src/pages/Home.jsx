import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { LiaFastForwardSolid } from "react-icons/lia";
import viewAll from "../assets/homeImgs/fast-forward.png";
import { trendingItems } from "../data";
const Home = () => {
  return (
    <section id="home" className="w-full">
      {/* Trending Items Heading */}
      <div id="trending__now_heading">
        <h1>
          <NavLink>Trending Now</NavLink>
        </h1>
        <NavLink className={`flex items-center gap-1`}>
          View All
          <img
            src={viewAll}
            alt="view all"
            className="w-[10px] h-[10px] aspect-video"
          />
        </NavLink>
      </div>

      {/* Trending Items */}
      <div id="trending__now_items">
        {trendingItems.map((trendingItem, index) => (
          <NavLink key={trendingItem.id}>
            <img src={trendingItem.img} alt={trendingItem.title} />
            <span>{trendingItem.title}</span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Home;
