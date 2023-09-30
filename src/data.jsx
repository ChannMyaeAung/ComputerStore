/* Footer Imports */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHandPointRight, // sidebar
} from "react-icons/fa";
/* Payment Icons */
import VisaIcon from "./assets/visa.svg";
import MasterCardIcon from "./assets/master-card.svg";
import PaypalIcon from "./assets/paypal.svg";

/* Sidebar */
export const sideBarEls = [
  {
    id: 1,
    title: "Today's deals",
  },
  {
    id: 2,
    title: "What's new in store",
  },
  {
    id: 3,
    title: "Laptops",
  },
  {
    id: 4,
    title: "Desktops",
  },
  {
    id: 5,
    title: "TV, Video & Audio",
  },
  {
    id: 6,
    title: "Networking",
  },
];
/* Footer Data */
export const FAQLinks = [
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Reviews",
    path: "/reviews",
  },
  {
    id: 3,
    title: "Career",
    path: "/career",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    title: "Terms",
    path: "/terms",
  },
  {
    id: 6,
    title: "Returns",
    path: "/returns",
  },
  {
    id: 7,
    title: "Privacy",
    path: "/privacy",
  },
];
export const socialMedia = [
  {
    id: 1,
    path: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    path: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    path: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    path: "https://www.linkedin.com",
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    path: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
];

export const paymentIcons = [
  {
    id: 1,
    icon: VisaIcon,
    iconName: "Visa",
  },
  {
    id: 2,
    icon: MasterCardIcon,
    iconName: "Master Card",
  },
  {
    id: 3,
    icon: PaypalIcon,
    iconName: "Paypal",
  },
];
