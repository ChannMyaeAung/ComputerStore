/* Sidebar Imports */
import { LiaBell, LiaHandPointRight } from "react-icons/lia";

/* Footer Imports */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
/* Payment Icons */
import VisaIcon from "../assets/footerImgs/visa.svg";
import MasterCardIcon from "../assets/footerImgs/master-card.svg";
import PaypalIcon from "../assets/footerImgs/paypal.svg";

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
        title: "Laptop RAM",
        path: "/laptop-ram",
      },
    ],
  },
  {
    id: 4,
    title: "Desktops",
    children: [
      {
        id: 41,
        title: "Intel CPU Sockets",
        path: "/intel-cpu",
      },
      {
        id: 42,
        title: "AMD CPU Sockets",
        path: "/amd-cpu",
      },
      {
        id: 43,
        title: "Motherboards",
        path: "/motherboards",
      },
      {
        id: 44,
        title: "Desktop RAM",
        path: "/desktop-ram",
      },

      {
        id: 45,
        title: "Graphic Cards",
        path: "/gpus",
      },
      {
        id: 46,
        title: "Power Supplies",
        path: "/power-supplies",
      },
      {
        id: 47,
        title: "Pre-built Desktops",
        path: "/pre-built-desktops",
      },
    ],
  },
  {
    id: 5,
    title: "Monitors",
    children: [
      {
        id: 51,
        title: "AOC",
        path: "/aoc",
      },
    ],
  },
  {
    id: 6,
    title: "Peripherals",
  },
  {
    id: 7,
    title: "Chairs/Tables",
    children: [
      {
        id: 71,
        title: "Office Chairs",
        path: "/office-chairs",
      },
      {
        id: 72,
        title: "Gaming Chairs",
        path: "/gaming-chairs",
      },
      {
        id: 73,
        title: "Office Tables",
        path: "/office-tables",
      },
      {
        id: 74,
        title: "Gaming Tables",
        path: "/gaming-tables",
      },
    ],
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
