import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header>
      <nav>
        <div
          className={`hamburger ${isNavOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="w-[20px] hamburger__topBar bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
          <div className="w-[30px] hamburger__bottomBar bottom-0 bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
        </div>
        <div className={`sidebar ${isNavOpen ? "open" : ""}`}></div>
      </nav>
    </header>
  );
};

export default Navbar;
