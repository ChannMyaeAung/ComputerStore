import React from "react";
import { styles } from "../../styles";
import { paymentIcons, socialMedia } from "../../data";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

/* Google Play and App Store */
import appStoreSvg from "../../assets/app_store.svg";
import googleStoreSvg from "../../assets/google_store.svg";
const FooterBottom = () => {
  return (
    <section
      id="footer__bottom"
      className={`${styles.paddingY} ${styles.paddingX} gap-6 border shadow-xl w-full bg-[#fff] flex flex-col items-center justify-center`}
    >
      <div
        id="footer__bottom_socialMedia"
        className={`${styles.flexCenter} gap-2 mb-auto flex-wrap`}
      >
        {socialMedia.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            target="_blank"
            className={`border-[#878787] border-2 duration-200 hover:-translate-y-2 hover:text-black hover:border-black p-2 rounded-full `}
          >
            <IconContext.Provider
              value={{
                className: "hover:text-black text-[20px] text-[#878787]",
              }}
            >
              {item.icon}
            </IconContext.Provider>
          </NavLink>
        ))}
      </div>

      <div id="footer__payments" className="flex items-center gap-3">
        {paymentIcons.map((icon) => (
          <figure key={icon.id}>
            <img
              src={icon.icon}
              alt={icon.iconName}
              className="w-[60px] h-[60px] object-cover"
            />
          </figure>
        ))}
      </div>

      <div
        id="footer__apps"
        className="flex flex-col items-center justify-center w-full sm:flex-row"
      >
        <NavLink
          to={`https://www.apple.com/app-store/`}
          className={`w-[150px] cursor-pointer`}
          target="_blank"
        >
          <img src={appStoreSvg} alt="AppStore" />
        </NavLink>

        <NavLink
          to={`https://store.google.com/regionpicker?pli=1`}
          className={`w-[150px] cursor-pointer`}
          target="_blank"
        >
          <img src={googleStoreSvg} alt="GoogleStore" />
        </NavLink>
      </div>

      <p className="mt-auto text-center">
        Copyright© {new Date().getFullYear()} ChanComputerStore.com
      </p>
    </section>
  );
};

export default FooterBottom;
