import React from "react";
import { paymentIcons, socialMedia } from "../data";
import { styles } from "../styles";
import { NavLink } from "react-router-dom";

/* Google Play and App Store */
import appStoreSvg from "../assets/app_store.svg";
import googleStoreSvg from "../assets/google_store.svg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className={`${styles.paddingY} ${styles.paddingX} gap-6 fixed bottom-0 border shadow-xl w-full bg-[#fffdde]  flex flex-col items-center justify-center`}
    >
      <div
        id="footer__socialMedia"
        className={`${styles.flexCenter} gap-2 mb-auto flex-wrap`}
      >
        {socialMedia.map((item) => (
          <div
            key={item.id}
            className="border-[3px] duration-200 hover:border-black hover:-translate-y-[5px] border-[#878787] rounded-full p-2"
          >
            <NavLink to={item.path} target="_blank">
              {item.icon}
            </NavLink>
          </div>
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
        className="flex flex-col items-center justify-center w-full md:flex-row"
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
    </footer>
  );
};

export default Footer;
