import React, { Suspense, lazy, useState } from "react";
import { FaSearch, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

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
      <nav className="flex h-[100px] border items-center justify-between gap-6 overflow-hidden">
        {/* Sidebar Toggle */}
        <div id="sidebar__container" className="flex gap-6 item-center">
          <div
            id="toggleMenu"
            className={`hamburger ${isNavOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="w-[20px] hamburger__topBar bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
            <div className="w-[30px] hamburger__bottomBar bottom-0 bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
          </div>

          {/* Search Bar Toggle */}
          <button
            id="searchBar__toggle"
            className="p-0 m-0 duration-200 hover:scale-110"
            onClick={() => setSearchBarOpen(!searchBarOpen)}
          >
            <FaSearch size={20} />
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
                className: "hover:text-red-600 duration-200",
              }}
            >
              <FaUserAlt />
            </IconContext.Provider>
          </NavLink>

          <button id="shopping__cart" className="pr-1">
            <IconContext.Provider
              value={{
                className: "hover:text-red-600 duration-200",
              }}
            >
              <FaShoppingBag />
            </IconContext.Provider>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
