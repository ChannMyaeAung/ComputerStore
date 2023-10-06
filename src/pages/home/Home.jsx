import React, { Suspense, lazy, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { bestDeals, trendingItems } from "../../data/HomeData";
import { styles } from "../../styles";
import viewAll from "../../assets/homeImgs/trending_items/fast-forward.png";

/* Importing components for home page */
const TrendingItems = lazy(() => import("./TrendingItems"));
const Deals = lazy(() => import("./Deals"));

const Home = () => {
  /* State Variable to track the screen width to render a certain amount of items*/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* Updating the windowWidth state whenever the window size changes. */
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  /* Listens for window resize events and calls updateWindowWidth function */
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <section
      id="home"
      className={`w-full flex flex-col gap-3  ${styles.paddingY}`}
    >
      {/* Trending Now */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <div
          id="trending__now"
          className={`flex flex-col gap-3 ${styles.paddingX}`}
        >
          <TrendingItems
            trendingItems={trendingItems}
            windowWidth={windowWidth}
            viewAll={viewAll}
          />
        </div>
      </Suspense>

      {/* Today Deals */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <div
          id="today__deals"
          className={`flex flex-col gap-3 ${styles.marginY} gradientGray py-3 ${styles.paddingX}`}
        >
          <Deals
            bestDeals={bestDeals}
            windowWidth={windowWidth}
            viewAll={viewAll}
          />
        </div>
      </Suspense>
    </section>
  );
};
export default Home;
