/* Sidebar Imports */
import { LiaBell, LiaHandPointRight } from "react-icons/lia";

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
import VisaIcon from "./assets/footerImgs/visa.svg";
import MasterCardIcon from "./assets/footerImgs/master-card.svg";
import PaypalIcon from "./assets/footerImgs/paypal.svg";

/* Sidebar */
export const sideBarEls = [
  {
    id: 1,
    title: "Today's deals",
    path: "/deals",
    icon: <LiaBell size={25} />,
  },
  {
    id: 2,
    title: "What's new in store",
    path: "/recent-updates",
    icon: <LiaHandPointRight size={25} />,
  },
  {
    id: 3,
    title: "Laptops",
    children: [
      {
        id: 31,
        title: "Apple Macbooks",
        path: "/macbooks",
      },
      {
        id: 32,
        title: "Office Laptops",
        path: "/office-laptops",
      },
      {
        id: 33,
        title: "Gaming Laptops",
        path: "/gaming-laptops",
      },
      {
        id: 34,
        title: "Laptop Coolers",
        path: "/laptop-coolers",
      },
      {
        id: 35,
        title: "Laptop Backpacks",
        path: "/laptop-backpacks",
      },
      {
        id: 36,
        title: "Cables & Accessories - PC",
        path: "/accessories-PC",
      },
    ],
  },
  {
    id: 4,
    title: "Desktops",
    children: [
      {
        id: 41,
        title: "Desktop Components",
        children: [
          {
            id: 411,
            title: "Intel CPU Sockets",
            path: "/intel-cpu",
          },
          {
            id: 412,
            title: "AMD CPU Sockets",
            path: "/amd-cpu",
          },
          {
            id: 413,
            title: "Motherboards",
            path: "/motherboards",
          },
          {
            id: 414,
            title: "Desktop Memory",
            path: "/desktop-ram",
          },
          {
            id: 415,
            title: "Laptop Memory",
            path: "/laptop-ram",
          },
          {
            id: 416,
            title: "Graphic Cards",
            path: "/gpus",
          },
          {
            id: 417,
            title: "Power Supplies",
            path: "/power-supplies",
          },
        ],
      },
    ],
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

/* Home Page */
/* Trending Now */
export const trendingItems = [
  {
    id: 1,
    title: "AOC",
    path: "/aoc",
    img: "./assets/homeImgs/trending_aoc_monitor.avif",
  },
  {
    id: 2,
    title: "AOC",
    path: "/keyboards-mice",
    img: "./assets/homeImgs/trending_keyboards&mice.avif",
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
