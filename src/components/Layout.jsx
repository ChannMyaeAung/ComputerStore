import React from "react";
import Navbar from "../pages/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
