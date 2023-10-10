import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";
import {
  bestDeals,
  homeHeroImgs,
  newProducts,
  trendingItems,
} from "../../data/HomeData";
import { styles } from "../../styles";
import viewAll from "../../assets/homeImgs/trending_items/fast-forward.png";

/* Importing components for home page */
const TrendingItems = lazy(() => import("./TrendingItems"));
const Deals = lazy(() => import("./Deals"));
const NewProducts = lazy(() => import("./NewProducts"));

const Home = () => {
  /* State Variable to track the screen width to render a certain amount of items*/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* Hero Images Data */
  const [heroImgs, setHeroImgs] = useState(homeHeroImgs);
  /* Index to display hero image slider */
  const [index, setIndex] = useState(0);

  console.log(heroImgs);
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

  /* Infinite Sliding */
  useEffect(() => {
    const lastIndex = heroImgs.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, heroImgs]);

  /* automatically slide show hero Images every 3 seconds */
  useEffect(() => {
    let slider = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearTimeout(slider);
  }, [index]);

  return (
    <section
      id="home"
      className={`w-full flex flex-col gap-3 ${styles.paddingY}`}
    >
      {/* Hero */}
      <div
        id="home__hero"
        className={`relative w-full flex h-[300px] overflow-hidden mb-6 ${styles.paddingX}`}
      >
        <Fragment>
          {heroImgs.map((image, currentImgIndex) => {
            /* Styling in index.css */
            let position = "nextSlide";

            if (index === currentImgIndex) {
              position = "activeSlide";
            }

            if (
              currentImgIndex === index - 1 ||
              (index === 0 && currentImgIndex === heroImgs.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <figure
                key={image.id}
                className={`absolute left-0 w-full h-full ${position} duration-300 ease-in-out opacity-0`}
              >
                <img
                  src={image.img}
                  alt={image.alt}
                  className="w-full h-full"
                />
              </figure>
            );
          })}
        </Fragment>

        <button
          onClick={() => setIndex(index - 1)}
          className={`absolute p-2 text-3xl text-white -translate-y-1/2 rounded-full left-1 bg-sky-500 top-1/2 ${styles.cursorTransition} hover:bg-sky-400`}
        >
          <LiaArrowLeftSolid />
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          className={`absolute p-2 text-3xl text-white -translate-y-1/2 rounded-full right-1 bg-sky-500 top-1/2 ${styles.cursorTransition} hover:bg-sky-400`}
        >
          <LiaArrowRightSolid />
        </button>
      </div>

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
          className={`flex flex-col gap-3 ${styles.marginY} gradientGray ${styles.paddingY} ${styles.paddingX}`}
        >
          <Deals
            bestDeals={bestDeals}
            windowWidth={windowWidth}
            viewAll={viewAll}
          />
        </div>
      </Suspense>

      {/* Today Deals */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <div
          id="today__deals"
          className={`flex flex-col gap-3  py-3 ${styles.paddingX}`}
        >
          <NewProducts
            newProducts={newProducts}
            windowWidth={windowWidth}
            viewAll={viewAll}
          />
        </div>
      </Suspense>
    </section>
  );
};
export default Home;
