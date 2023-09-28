/* Footer Imports */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
/* Payment Icons */
import VisaIcon from "./assets/visa.svg";
import MasterCardIcon from "./assets/master-card.svg";
import PaypalIcon from "./assets/paypal.svg";

/* Footer Data */
export const socialMedia = [
  {
    id: 1,
    path: "https://www.facebook.com",
    icon: <FaFacebookF size={20} color="#878787" />,
  },
  {
    id: 2,
    path: "https://www.twitter.com",
    icon: <FaTwitter size={20} color="#878787" />,
  },
  {
    id: 3,
    path: "https://www.instagram.com",
    icon: <FaInstagram size={20} color="#878787" />,
  },
  {
    id: 4,
    path: "https://www.linkedin.com",
    icon: <FaLinkedinIn size={20} color="#878787" />,
  },
  {
    id: 5,
    path: "https://www.youtube.com",
    icon: <FaYoutube size={20} color="#878787" />,
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
