import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { homeStyles, styles } from "../../styles";

const TrendingItems = ({ trendingItems, windowWidth, viewAll }) => {
  /* Func to render all trending items on home page */
  function renderTrendingItems() {
    return (
      <React.Fragment>
        {trendingItems.map(
          (trendingItem, index) =>
            /* Check if the screen width is greater than a certain threshold (e.g., 768px )
            OR if the index of the current item is less than 2,
            render the items that satisfy one of the conditions.
            (render 2 items on screens less than 768px)
            (render all remaining items on screens >= 768px)
            */
            windowWidth >= 768 || index < 2 ? (
              <NavLink
                to={trendingItem.path}
                key={trendingItem.id}
                className={`flex flex-col ${styles.cursorTransition}`}
              >
                <div className="relative w-full h-full mb-3">
                  <motion.img
                    src={trendingItem.img}
                    alt={trendingItem.title}
                    className="w-full h-full mb-3"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 0.4,
                    }} // Reduce opacity on hover
                    transition={{
                      type: "keyframes",
                      times: [0, 1, 0.8, 0.4, 1],
                      duration: 0.5,
                    }}
                    className="absolute top-0 w-full h-full transition-opacity bg-[#dddfff] rounded-full opacity-0"
                  />
                </div>
                <span
                  className={`w-full ${styles.cursorTransition}  border-2 rounded-[8px] font-semibold py-1 border-black text-center hover:bg-black focus-visible:bg-black hover:text-white focus-visible:text-white`}
                >
                  {trendingItem.title}
                </span>
              </NavLink>
            ) : null // Don't render more than 2 items on small screens
        )}
      </React.Fragment>
    );
  }

  return (
    <>
      {/* Trending Items Heading */}
      <div id="trending__now_heading" className="flex justify-between">
        <h1 className={`${homeStyles.heading}`}>
          <NavLink>Trending Now</NavLink>
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

      {/* Trending Items */}
      <div
        id="trending__now_items"
        className="grid justify-between grid-cols-2 gap-10 overflow-hidden md:grid-cols-4"
      >
        {renderTrendingItems()}
      </div>
    </>
  );
};

export default TrendingItems;
