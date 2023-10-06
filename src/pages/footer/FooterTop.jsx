import React from "react";
import { styles } from "../../styles";
import { Form, NavLink } from "react-router-dom";
import coin from "../../assets/footerImgs/coins.png";

import {
  LiaLifeRing,
  LiaStreetViewSolid,
  LiaCoinsSolid,
} from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import { FAQLinks } from "../../data/data";
const FooterTop = () => {
  return (
    <section
      id="footer__top"
      className={`bg-gray-200 flex flex-col ${styles.paddingX}`}
    >
      {/* User Subscription */}
      <div id="footer__top_subscription">
        <h2 className="flex text-[18px] items-center gap-3 my-3 font-semibold">
          <IconContext.Provider
            value={{ className: "aspect-video w-[30px] h-[30px]" }}
          >
            <LiaCoinsSolid />
          </IconContext.Provider>
          Sign Up & Save $15
        </h2>

        <Form className="flex flex-col w-full p-1 bg-white border border-black">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="p-3 text-center text-[14px]"
          />
          <button
            type="submit"
            className="flex bg-black text-white items-center justify-center gap-3 py-2 text-[17px]"
          >
            Subscribe &#10230;
          </button>
        </Form>

        <p className="text-[18px] italic font-extralight leading-5 my-3">
          * First Purchase? Subscribe & receive coupon.
        </p>
      </div>

      {/* Help & FAQs */}
      <div id="footer__top_FAQ" className={`${styles.marginY}`}>
        <h2 className="flex text-[18px] items-center gap-3 my-3 font-semibold">
          <IconContext.Provider
            value={{ className: "aspect-video w-[30px] h-[30px]" }}
          >
            <LiaLifeRing />
          </IconContext.Provider>
          Help & FAQs
        </h2>

        <ul className="grid grid-cols-4 gap-1">
          {FAQLinks.map((link, index) => (
            <React.Fragment key={link.id}>
              <NavLink
                to={link.path}
                className={`flex text-[14px] md:text-[16px] flex-1 duration-200 hover:text-black justify-around gap-1 text-primaryGray`}
              >
                {link.title}
                {index !== FAQLinks.length - 1 && <span className="">|</span>}
              </NavLink>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Collect Location */}
      <div id="footer__top_CollectLocation" className={`${styles.marginY}`}>
        <h2 className="flex text-[18px] items-center gap-3 my-3 font-semibold">
          <IconContext.Provider
            value={{ className: "aspect-video w-[30px] h-[30px]" }}
          >
            <LiaStreetViewSolid />
          </IconContext.Provider>
          Help & FAQs
        </h2>

        <div className="text-[14px] md:text-[16px] text-primaryGray">
          <p>No.(1), Bogyoke Road, Hpa-an, Kayin State, Myanmar.</p>
          <p className="font-semibold">
            Phone: <span className="font-normal">09-450-321-640</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
