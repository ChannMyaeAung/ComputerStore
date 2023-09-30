import React, { Suspense, lazy } from "react";

const FooterTop = lazy(() => import("./FooterTop"));
const FooterBottom = lazy(() => import("./FooterBottom"));

const Footer = () => {
  return (
    <footer id="footer" className="relative bottom-0 w-full">
      <Suspense fallback={<h1>Loading...</h1>}>
        <FooterTop />
        <FooterBottom />
      </Suspense>
    </footer>
  );
};

export default Footer;
