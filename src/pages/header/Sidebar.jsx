import React, { Fragment, useState } from "react";
import { sideBarEls } from "../../data";
import { NavLink } from "react-router-dom";
import { styles } from "../../styles";
import { LiaPlusSolid } from "react-icons/lia";

/* Animation */
import { motion } from "framer-motion";
import { dropdownAnimation, dropdownItems } from "../../animation";

const Sidebar = ({ isNavOpen, setIsNavOpen }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (elementId) => {
    if (openDropdownId === elementId) {
      setOpenDropdownId(null); //If the dropdown is already open, setting null to close it.
    } else {
      //If it isn't open, open the dropdown of the element being clicked.
      setOpenDropdownId(elementId);
    }
  };

  const renderSidebarChildren = (elements) => {
    return (
      <motion.ul
        variants={dropdownAnimation}
        initial="hidden"
        animate="show"
        className={`overflow-hidden`}
      >
        {elements.map((el) => (
          <motion.li
            key={el.id}
            variants={dropdownItems}
            className="py-3 border pl-14 last:border-b-0"
          >
            <NavLink to={el.path}>{el.title}</NavLink>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  const renderSidebarItems = (items) => {
    return (
      <ul className={`mt-[5rem] w-full`}>
        {items.map((sidebarEl, index) => (
          <>
            <li key={sidebarEl.id}>
              {sidebarEl.path ? (
                <NavLink
                  to={sidebarEl.path}
                  className={`flex items-center gap-3 ${styles.navItems}`}
                >
                  {sidebarEl.icon && <Fragment>{sidebarEl.icon}</Fragment>}
                  {sidebarEl.title}
                </NavLink>
              ) : (
                <div
                  className={`${styles.navItems}  flex items-center justify-between cursor-pointer`}
                  onClick={() => toggleDropdown(sidebarEl.id)}
                >
                  {sidebarEl.title}
                  {/* Plus Button */}
                  <div
                    id="plus-btn"
                    className={`flex flex-col items-center justify-center relative`}
                  >
                    {/* Styling Class plus-btn in index.css */}
                    <button
                      className={` button_plus ${
                        sidebarEl.id === openDropdownId ? "open" : ""
                      }`}
                    />
                  </div>
                </div>
              )}
            </li>
            {/* Checking if the sidebarEl has children and if the dropdown is open */}
            {/* If both conditions are true, the function will call itself */}
            {sidebarEl.children && openDropdownId === sidebarEl.id && (
              <Fragment>{renderSidebarChildren(sidebarEl.children)}</Fragment>
            )}
          </>
        ))}
      </ul>
    );
  };

  return (
    <>
      <aside id="sidebar" className={`sidebar ${isNavOpen ? "open" : ""}`}>
        {renderSidebarItems(sideBarEls)}
      </aside>

      {/* If sidebar is open, clicking on the overlay will close it including the dropdown */}
      {isNavOpen && (
        <div
          onClick={() => {
            setIsNavOpen(false);
            setOpenDropdownId(null);
          }}
          id="sidebar__overlay"
          className="fixed w-full left-0 top-0 h-full bg-black opacity-20 z-[10]"
        />
      )}
    </>
  );
};

export default Sidebar;

{
  /* <ul>
                {sidebarEl.children.map((child) => (
                  <li key={child.id}>
                    <NavLink to={child.path}>{child.title}</NavLink>
                  </li>
                ))}
              </ul> */
}
