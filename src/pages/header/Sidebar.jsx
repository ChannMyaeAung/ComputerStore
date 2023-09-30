import React from "react";

const Sidebar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <aside
        id="sidebar"
        className={`sidebar ${isNavOpen ? "open" : ""}`}
      ></aside>

      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          id="sidebar__overlay"
          className="fixed w-full left-0 top-0 h-full bg-black opacity-20 z-[10]"
        />
      )}
    </>
  );
};

export default Sidebar;
