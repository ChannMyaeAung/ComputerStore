import React, { Suspense, lazy, useState } from "react";
import { LiaSearchSolid, LiaShoppingBagSolid, LiaUser } from "react-icons/lia";
import logo from "../../assets/logo.webp";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { styles } from "../../styles";

const Sidebar = lazy(() => import("./Sidebar"));
const Searchbar = lazy(() => import("./Searchbar"));

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav
        className={`${styles.paddingX} flex h-[100px] items-center justify-between gap-6 overflow-hidden`}
      >
        {/* Sidebar Toggle */}
        <div id="sidebar__container" className="flex gap-6 item-center">
          <div
            id="toggleMenu"
            className={`hamburger ${isNavOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className=" hamburger__topBar"></div>
            <div className=" hamburger__bottomBar"></div>
          </div>

          {/* Search Bar Toggle */}
          <button
            id="searchBar__toggle"
            className="p-0 m-0 duration-200 hover:scale-110"
            onClick={() => setSearchBarOpen(!searchBarOpen)}
          >
            <LiaSearchSolid size={20} />
          </button>
        </div>

        {/* Styling in index.css */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </Suspense>

        {/* Styling in index.css */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Searchbar
            searchBarOpen={searchBarOpen}
            setSearchBarOpen={setSearchBarOpen}
          />
        </Suspense>
        {/* Logo */}
        <NavLink to={`/`}>
          <img src={logo} alt="logo" />
        </NavLink>

        {/* Login/User */}
        <div className="flex items-center gap-3">
          <NavLink id="login" className="cursor-pointer">
            <IconContext.Provider
              value={{
                className: "hover:text-red-600 text-[30px] duration-200",
              }}
            >
              <LiaUser />
            </IconContext.Provider>
          </NavLink>

          <button id="shopping__cart" className="relative pr-1">
            <IconContext.Provider
              value={{
                className: "hover:text-red-600 text-[30px] duration-200",
              }}
            >
              <LiaShoppingBagSolid />
            </IconContext.Provider>
            <span className="absolute w-[20px] h-[20px] text-[12px] text-white top-[-3px] right-0 rounded-full bg-red-500">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
