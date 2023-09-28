import { useState } from "react";
import humburgerMenu from "./assets/humburger-menu.svg";
import "./App.css";

function App() {
  return (
    <>
      <h2>Hello</h2>
      <div className="relative h-[25px] w-[25px] mt-[20px] duration-200 ease-linear">
        <div className="w-[20px] bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
        <div className="w-[20px] bg-black h-[2px] absolute duration-1000 z-[20] ease-linear"></div>
      </div>
    </>
  );
}

export default App;
