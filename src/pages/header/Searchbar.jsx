import React from "react";
import { styles } from "../../styles";
import { Form } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Searchbar = ({ searchBarOpen, setSearchBarOpen }) => {
  return (
    <>
      <aside
        id="search__sidebar"
        className={`searchbar ${searchBarOpen ? "open" : ""} py-16`}
      >
        <div
          className={`border shadow-sm ${styles.paddingX} flex flex-col gap-3 ${styles.paddingY}`}
        >
          <Form className="relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full placeholder:text-[#666] outline-none p-2 bg-gray-300 border rounded-[8px]"
            />
            <FaSearch color="#878787" className="absolute right-2 top-[13px]" />
          </Form>

          <span className="text-[14px] text-primaryGray text-center">
            Quick search:{" "}
            <span className="text-black ">ASUS TUF, AMD, Intel, AOC, iMac</span>
          </span>
        </div>
      </aside>
      {searchBarOpen && (
        <div
          onClick={() => setSearchBarOpen(false)}
          id="search__sidebar_overlay"
          className="fixed w-full left-0 top-0 h-full bg-black opacity-20 z-[10]"
        />
      )}
    </>
  );
};

export default Searchbar;
