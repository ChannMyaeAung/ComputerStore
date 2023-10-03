import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/animations/error_animation.json";
import { styles } from "../styles";

const NotFound = () => {
  return (
    <section
      id="not__found"
      className={`${styles.flexColumnCenter} ${styles.paddingY} ${styles.marginY}`}
    >
      <h1 className="font-extrabold text-red-600">Oops! 404 NOT FOUND</h1>
      <p className="text-lg">
        Sorry, the page you are looking for is not found.
      </p>
      <figure className="w-[500px] h-full">
        <Lottie animationData={errorAnimation} />
      </figure>
    </section>
  );
};

export default NotFound;
